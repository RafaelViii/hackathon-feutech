#include <Adafruit_Fingerprint.h>
#include <HardwareSerial.h>

HardwareSerial mySerial(2);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);

// Custom codes mapped to template IDs 1–5 (example)
String userCodes[] = {"XO09821", "BX10192", "ZL99871", "QW55660", "TR47823"};

void setup() {
  Serial.begin(115200);
  mySerial.begin(57600, SERIAL_8N1, 17, 16);
  finger.begin(57600);

  if (!finger.verifyPassword()) {
    Serial.println("Fingerprint sensor not found :(");
    while (1) delay(1);
  }

  Serial.println("Ready to enroll a fingerprint.");
  Serial.print("Enter template ID (1 to ");
  Serial.print(sizeof(userCodes) / sizeof(userCodes[0]));
  Serial.println("):");

  while (!Serial.available());
  int id = Serial.parseInt();
  if (id < 1 || id > sizeof(userCodes) / sizeof(userCodes[0])) {
    Serial.println("Invalid ID number.");
    return;
  }

  Serial.print("Enrolling with ID #");
  Serial.print(id);
  Serial.print(" which maps to custom code: ");
  Serial.println(userCodes[id - 1]);

  getFingerprintEnroll(id);
}

void loop() {
  Serial.println("\nEnter template ID to enroll (1–127):");

  while (!Serial.available());  // Wait for user input
  int id = Serial.parseInt();
  Serial.read(); // Clear the buffer

  if (id < 1 || id > 127) {
    Serial.println("❌ Invalid ID. Please enter a number between 1 and 127.");
    return;
  }

  Serial.print("Enrolling fingerprint to ID #");
  Serial.println(id);
  getFingerprintEnroll(id);

  Serial.println("✅ Enrollment complete.\n");
}

void getFingerprintEnroll(int id) {
  int p = -1;
  Serial.println("Place finger to enroll...");
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
  }

  finger.image2Tz(1);
  Serial.println("Remove finger...");
  delay(2000);
  while (finger.getImage() != FINGERPRINT_NOFINGER);

  Serial.println("Place same finger again...");
  while (finger.getImage() != FINGERPRINT_OK);
  finger.image2Tz(2);

  if (finger.createModel() == FINGERPRINT_OK) {
    if (finger.storeModel(id) == FINGERPRINT_OK) {
      Serial.print("✅ Enrolled! ID #");
      Serial.print(id);
      Serial.print(" → ");
      Serial.println(userCodes[id - 1]);
    } else {
      Serial.println("❌ Failed to store fingerprint");
    }
  } else {
    Serial.println("❌ Fingerprints did not match");
  }
}