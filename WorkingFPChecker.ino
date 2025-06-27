#include <Adafruit_Fingerprint.h>
#include <HardwareSerial.h>

HardwareSerial mySerial(2);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

// Match these to your enrollment list
String userCodes[] = {"XO09821", "BX10192", "ZL99871", "QW55660", "TR47823"};

void setup() {
  Serial.begin(115200);
  mySerial.begin(57600, SERIAL_8N1, 17, 16);  // RX = 17, TX = 16
  finger.begin(57600);

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

void loop() {
  if (finger.getImage() != FINGERPRINT_OK) return;
  if (finger.image2Tz() != FINGERPRINT_OK) return;

  if (finger.fingerSearch() == FINGERPRINT_OK) {
    int id = finger.fingerID;
    Serial.print("✅ Match found! ID: ");
    Serial.println(id);

    // Map to your custom code
    if (id >= 1 && id <= sizeof(userCodes) / sizeof(userCodes[0])) {
      Serial.print("Code: ");
      Serial.println(userCodes[id - 1]);  // Arrays start from 0, fingerprint IDs start from 1
    } else {
      Serial.println("⚠️ No code assigned for this ID.");
    }
  } else {
    Serial.println("❌ No match.");
  }

  delay(1000);
}