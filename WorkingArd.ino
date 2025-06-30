#include <Adafruit_Fingerprint.h>
#include <HardwareSerial.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <time.h>

#define XY_MOS_PIN 19

// WiFi credentials
const char* ssid = "Rise & Grind 4G";
const char* password = "michaeljordan";

// Firebase
const char* firebase_host = "https://iot-web-58054-default-rtdb.asia-southeast1.firebasedatabase.app";
const char* firebase_secret = "Xp9h6kSDEZ0u64EOkajsCA6EVaMLs3w7hc9r0W75";

HardwareSerial mySerial(2);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

String userCodes[] = {"XO09821", "BX10192", "ZL99871", "QW55660", "TR47823"};

// Person names for IDs: 1 = Rafael, 2 = Ariel
String userNames[] = {"Rafael", "Ariel", "Unknown3", "Unknown4", "Unknown5"};

// Check if valid Unix time (> Jan 1, 2023)
bool isTimeValid(time_t t) {
  return t > 1672531200; // 2023-01-01 00:00:00 GMT
}

void waitForNTP() {
  Serial.print("Waiting for NTP time sync");
  time_t now = time(nullptr);
  int retry = 0;
  while (!isTimeValid(now) && retry < 60) { // Wait max 30 seconds
    delay(500);
    Serial.print(".");
    now = time(nullptr);
    retry++;
  }
  Serial.println();
  if (isTimeValid(now)) {
    Serial.print("NTP time acquired: ");
    Serial.println(now);
  } else {
    Serial.println("ERROR: NTP time not acquired.");
  }
}

void setup() {
  Serial.begin(115200);
  mySerial.begin(57600, SERIAL_8N1, 17, 16); // RX = 17, TX = 16
  finger.begin(57600);

  pinMode(XY_MOS_PIN, OUTPUT);
  digitalWrite(XY_MOS_PIN, LOW);

  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected!");

  // Set timezone to Asia/Manila (UTC+8)
  configTime(8 * 3600, 0, "pool.ntp.org", "time.nist.gov");
  waitForNTP(); // Wait up to 30 seconds for valid NTP time

  if (finger.verifyPassword()) {
    Serial.println("Fingerprint sensor ready!");
  } else {
    Serial.println("Fingerprint sensor not found.");
    while (1) delay(1);
  }

  finger.getTemplateCount();
  Serial.print("Loaded templates: ");
  Serial.println(finger.templateCount);
}

void sendStatusToFirebase(const String& status) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = String(firebase_host) + "/doorStatus.json?auth=" + firebase_secret;
    String payload = "\"" + status + "\"";
    http.begin(url);
    http.addHeader("Content-Type", "application/json");
    int httpResponseCode = http.PUT(payload);
    Serial.print("Firebase doorStatus response: ");
    Serial.println(httpResponseCode);
    http.end();
  } else {
    Serial.println("WiFi not connected. Cannot send status to Firebase.");
  }
}

// Added: send the ID and person name to Firebase logs
void sendLogToFirebase(const String& event, int id) {
  if (WiFi.status() == WL_CONNECTED) {
    time_t now = time(nullptr);
    if (!isTimeValid(now)) {
      Serial.println("ERROR: NTP time not valid. Skipping log.");
      return;
    }
    HTTPClient http;
    String url = String(firebase_host) + "/doorLogs.json?auth=" + firebase_secret;
    String person = "";
    if (id == 1) person = "Rafael";
    else if (id == 2) person = "Ariel";
    else person = "";
    String payload = "{\"event\":\"" + event + "\",\"timestamp\":" + String((unsigned long)now * 1000) + ",\"fpid\":" + String(id) + ",\"person\":\"" + person + "\"}";
    http.begin(url);
    http.addHeader("Content-Type", "application/json");
    int httpResponseCode = http.POST(payload);
    Serial.print("Firebase doorLogs POST: ");
    Serial.println(httpResponseCode);
    http.end();
  } else {
    Serial.println("WiFi not connected. Cannot send log to Firebase.");
  }
}

void loop() {
  if (finger.getImage() != FINGERPRINT_OK) return;
  if (finger.image2Tz() != FINGERPRINT_OK) return;

  if (finger.fingerSearch() == FINGERPRINT_OK) {
    int id = finger.fingerID;
    Serial.print("✅ Match found! ID: ");
    Serial.println(id);

    // Print person name
    if (id == 1) {
      Serial.println("Person: Rafael");
    } else if (id == 2) {
      Serial.println("Person: Ariel");
    } else {
      Serial.println("Person: Unknown");
    }

    if (id >= 1 && id <= sizeof(userCodes) / sizeof(userCodes[0])) {
      Serial.print("Code: ");
      Serial.println(userCodes[id - 1]);
    } else {
      Serial.println("⚠️ No code assigned for this ID.");
    }

    digitalWrite(XY_MOS_PIN, HIGH);
    Serial.println("🔓 XY-MOS relay ON");

    sendStatusToFirebase("open");
    sendLogToFirebase("open", id);

    delay(5000);

    digitalWrite(XY_MOS_PIN, LOW);
    Serial.println("🔒 XY-MOS relay OFF");

    sendStatusToFirebase("close");
    sendLogToFirebase("close", id);
  } else {
    Serial.println("❌ No match.");
  }

  delay(1000);
}