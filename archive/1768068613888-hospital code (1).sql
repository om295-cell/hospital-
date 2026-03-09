CREATE DATABASE hospital;
USE hospital;

CREATE TABLE doctors (
  doctor_id     INT AUTO_INCREMENT PRIMARY KEY,
  national_id   VARCHAR(30) NOT NULL UNIQUE,
  full_name     VARCHAR(200) NOT NULL,
  work_hours    VARCHAR(100),
  specialty     VARCHAR(100),
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO doctors (national_id, full_name, work_hours, specialty) VALUES
('39901011234567','Dr. Ahmed Hassan','08:00-16:00','Cardiology'),
('30002291234568','Dr. Mohamed Ali','09:00-17:00','Neurology'),
('29807011234569','Dr. Youssef Ibrahim','08:00-14:00','Orthopedics'),
('30105151234561','Dr. Fatma Khaled','10:00-18:00','Dermatology'),
('30212011234562','Dr. Omar Mahmoud','08:00-16:00','ENT Consultation (Ear, Nose, Throat)'),
('30303121234563','Dr. Nour El Din','09:00-17:00','Ophthalmology'),
('29709011234564','Dr. Khaled Mostafa','08:00-16:00','General Medicine'),
('30406151234565','Dr. Sara Abdelrahman','11:00-19:00','Radiology'),
('29911121234566','Dr. Mahmoud Farouk','08:00-14:00','Pediatrics'),
('30008251234560','Dr. Lina Yassin','09:00-17:00','Internal Medicine');

CREATE TABLE nurses (
  nurse_id      INT AUTO_INCREMENT PRIMARY KEY,
  national_id   VARCHAR(30) NOT NULL UNIQUE,
  full_name     VARCHAR(200) NOT NULL,
  work_hours    VARCHAR(100),
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO nurses (national_id, full_name, work_hours) VALUES
('39902011234570','Aisha Hassan','08:00-16:00'),
('30002291234571','Mariam Said','09:00-17:00'),
('29807011234572','Huda Ahmed','08:00-16:00'),
('30105151234573','Rania Fawzy','10:00-18:00'),
('30212011234574','Salma Nabil','08:00-16:00'),
('30303121234575','Hassan Adel','09:00-17:00'),
('29709011234576','Nada Samir','08:00-14:00'),
('30406151234577','Yasmin Tarek','11:00-19:00'),
('29911121234578','Reem Anwar','08:00-16:00'),
('30008251234579','Mostafa Amin','09:00-17:00');

CREATE TABLE doctor_nurse_assignment (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  doctor_id     INT NOT NULL,
  nurse_id      INT NOT NULL,
  start_date    DATE DEFAULT (CURRENT_DATE),
  end_date      DATE,
  UNIQUE KEY uq_doc_nurse_start (doctor_id, nurse_id, start_date),
  FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id) ON DELETE CASCADE,
  FOREIGN KEY (nurse_id)  REFERENCES nurses(nurse_id) ON DELETE CASCADE
);

INSERT INTO doctor_nurse_assignment (doctor_id, nurse_id, start_date, end_date) VALUES
(1,1,'2025-01-01',NULL),
(2,2,'2025-01-02',NULL),
(3,3,'2025-01-03',NULL),
(4,4,'2025-01-04',NULL),
(5,5,'2025-01-05',NULL),
(6,6,'2025-01-06',NULL),
(7,7,'2025-01-07',NULL),
(8,8,'2025-01-08',NULL),
(9,9,'2025-01-09',NULL),
(10,10,'2025-01-10',NULL);

CREATE TABLE detection_rooms ( 
  room_id INT AUTO_INCREMENT PRIMARY KEY, 
  room_number VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  room_type VARCHAR(50),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO detection_rooms (room_number, description, room_type) VALUES
('R-101','General examination','Exam'),
('R-102','Cardiology tests','ECG'),
('R-103','X-Ray room','Radiology'),
('R-104','MRI room','Radiology'),
('R-105','ENT examination','Exam'),
('R-106','Eye examination','Exam'),
('R-107','Emergency room','ER'),
('R-108','Orthopedic room','Exam'),
('R-109','Dermatology room','Exam'),
('R-110','Pediatrics room','Exam');

CREATE TABLE ambulances (
  ambulance_id     INT AUTO_INCREMENT PRIMARY KEY,
  plate_number     VARCHAR(30) NOT NULL UNIQUE,
  status           VARCHAR(30) DEFAULT 'available',
  default_nurse_id INT,
  created_at       DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (default_nurse_id) REFERENCES nurses(nurse_id)
);

INSERT INTO ambulances (plate_number, status, default_nurse_id) VALUES
('AMB-001','available',1),
('AMB-002','available',2),
('AMB-003','maintenance',3),
('AMB-004','available',4),
('AMB-005','available',5),
('AMB-006','busy',6),
('AMB-007','available',7),
('AMB-008','busy',8),
('AMB-009','available',9),
('AMB-010','available',10);

CREATE TABLE services (
  service_id INT AUTO_INCREMENT PRIMARY KEY,
  code       VARCHAR(50) NOT NULL UNIQUE,
  name       VARCHAR(200) NOT NULL,
  price      DECIMAL(12,2) NOT NULL CHECK (price >= 0),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO services (code, name, price) VALUES
('SRV001', 'General Checkup', 200),
('SRV002', 'Blood Test', 100),
('SRV003', 'X-Ray', 250),
('SRV004', 'MRI Scan', 600),
('SRV005', 'Cardiology Consultation', 450),
('SRV006', 'Neurology Consultation ', 100),
('SRV007', 'Orthopedic Consultation', 200),
('SRV008', 'Dermatology Consultation', 300),
('SRV009', 'ENT Consultation (Ear, Nose, Throat)', 150),
('SRV010', 'Ophthalmology Consultation', 150);

CREATE TABLE patients (
  patient_id    INT AUTO_INCREMENT PRIMARY KEY,
  national_id   VARCHAR(30) NOT NULL UNIQUE,
  full_name     VARCHAR(200) NOT NULL,
  phone         VARCHAR(30),
  gender        ENUM('Male','Female'),
  medical_history TEXT,
  created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO patients (national_id, full_name, phone, gender, medical_history) VALUES
('39901011234601','Ali Mohamed','555-1111','Male','Hypertension'),
('30002291234602','Fatma Abdelaziz','555-1112','Female','Diabetes'),
('29807011234603','Hussein Ramadan','555-1113','Male','Asthma'),
('30105151234604','Mona Saeed','555-1114','Female','None'),
('30212011234605','Ibrahim Hassan','555-1115','Male','Heart disease'),
('30303121234606','Dina Mahmoud','555-1116','Female','Allergies'),
('29709011234607','Yasser Khalil','555-1117','Male','Migraine'),
('30406151234608','Amal Farid','555-1118','Female','Arthritis'),
('29911121234609','Tamer Adel','555-1119','Male','High cholesterol'),
('30008251234610','Rasha Nasser','555-1120','Female','Anemia');

CREATE TABLE visits (
  visit_id        INT AUTO_INCREMENT PRIMARY KEY,
  patient_id      INT NOT NULL,
  doctor_id       INT,
  nurse_id        INT,
  visit_type      ENUM('scheduled', 'emergency') DEFAULT 'scheduled',
  scheduled_dt    DATETIME,
  entry_ts        DATETIME DEFAULT CURRENT_TIMESTAMP,
  exit_ts         DATETIME,
  status          ENUM('in_progress', 'completed', 'cancelled') DEFAULT 'in_progress',
  reason          TEXT,
  created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
  FOREIGN KEY (nurse_id) REFERENCES nurses(nurse_id)
);

INSERT INTO visits
(patient_id, doctor_id, nurse_id, visit_type, scheduled_dt, exit_ts, status, reason) VALUES
(1,1,1,'scheduled','2025-01-10 09:00:00','2025-01-10 09:30:00','completed','Routine checkup'),
(2,2,2,'scheduled','2025-01-11 10:00:00',NULL,'in_progress','Neurology consult'),
(3,3,3,'emergency','2025-01-11 11:00:00','2025-01-11 12:30:00','completed','Fracture'),
(4,4,4,'scheduled','2025-01-12 11:00:00',NULL,'cancelled','Skin rash'),
(5,5,5,'emergency','2025-01-12 13:00:00','2025-01-12 13:30:00','completed','ENT pain'),
(6,6,6,'scheduled','2025-01-13 14:00:00','2025-01-13 14:30:00','completed','Eye exam'),
(7,7,7,'scheduled','2025-01-14 08:00:00',NULL,'in_progress','General illness'),
(8,8,8,'scheduled','2025-01-15 12:00:00','2025-01-15 12:30:00','completed','X-Ray'),
(9,9,9,'scheduled','2025-01-16 10:00:00','2025-01-16 10:30:00','completed','Child fever'),
(10,10,10,'scheduled','2025-01-17 09:00:00','2025-01-17 09:30:00','completed','Internal medicine consult');

CREATE TABLE payments (
  payment_id     INT AUTO_INCREMENT PRIMARY KEY,
  patient_id     INT NOT NULL,
  payment_date   DATETIME DEFAULT CURRENT_TIMESTAMP,
  total_amount   DECIMAL(12,2) DEFAULT 0 CHECK (total_amount >= 0),
  payment_method ENUM('Card','Cash'),
  notes          TEXT,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id) ON DELETE CASCADE
);

INSERT INTO payments (patient_id, total_amount, payment_method, notes) VALUES
(1,200,'Cash','Checkup'),
(2,100,'Card','Blood test'),
(3,250,'Cash','X-Ray'),
(4,600,'Card','MRI'),
(5,450,'Cash','Cardiology'),
(6,100,'Card','Neurology'),
(7,200,'Cash','Orthopedic'),
(8,300,'Card','Dermatology'),
(9,150,'Cash','ENT'),
(10,150,'Card','Ophthalmology');

CREATE TABLE payment_items (
  item_id    INT AUTO_INCREMENT PRIMARY KEY,
  payment_id INT NOT NULL,
  service_id INT NOT NULL,
  unit_price DECIMAL(12,2) NOT NULL CHECK (unit_price >= 0),
  subtotal   DECIMAL(14,2) NOT NULL CHECK (subtotal >= 0),
  FOREIGN KEY (payment_id) REFERENCES payments(payment_id) ON DELETE CASCADE,
  FOREIGN KEY (service_id) REFERENCES services(service_id)
);

INSERT INTO payment_items (payment_id, service_id, unit_price, subtotal) VALUES
(1,1,200,200),
(2,2,100,100),
(3,3,250,250),
(4,4,600,600),
(5,5,450,450),
(6,6,100,100),
(7,7,200,200),
(8,8,300,300),
(9,9,150,150),
(10,10,150,150);

CREATE TABLE ambulance_transports (
  transport_id INT AUTO_INCREMENT PRIMARY KEY,
  ambulance_id INT NOT NULL,
  patient_id   INT,
  nurse_id     INT,
  pickup_time  DATETIME,
  dropoff_time DATETIME,
  origin       TEXT,
  destination  TEXT,
  created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ambulance_id) REFERENCES ambulances(ambulance_id) ON DELETE CASCADE,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (nurse_id) REFERENCES nurses(nurse_id)
);

INSERT INTO ambulance_transports
(ambulance_id, patient_id, nurse_id, pickup_time, dropoff_time, origin, destination) VALUES
(1,1,1,'2025-01-01 08:00','2025-01-01 08:30','Home','Hospital'),
(2,2,2,'2025-01-02 09:00','2025-01-02 09:40','Clinic','Hospital'),
(3,3,3,'2025-01-03 10:00','2025-01-03 10:50','Accident site','Hospital'),
(4,4,4,'2025-01-04 11:00','2025-01-04 11:30','Home','Hospital'),
(5,5,5,'2025-01-05 12:00','2025-01-05 12:45','Home','Hospital'),
(6,6,6,'2025-01-06 13:00','2025-01-06 13:35','Clinic','Hospital'),
(7,7,7,'2025-01-07 14:00','2025-01-07 14:40','Home','Hospital'),
(8,8,8,'2025-01-08 15:00','2025-01-08 15:50','Accident site','Hospital'),
(9,9,9,'2025-01-09 16:00','2025-01-09 16:30','Home','Hospital'),
(10,10,10,'2025-01-10 17:00','2025-01-10 17:45','Clinic','Hospital');

CREATE TABLE room_usage (
  usage_id INT AUTO_INCREMENT PRIMARY KEY,
  room_id INT NOT NULL,
  patient_id INT,
  doctor_id INT,
  nurse_id INT,
  start_ts DATETIME DEFAULT CURRENT_TIMESTAMP,
  end_ts DATETIME,
  notes TEXT,
  FOREIGN KEY (room_id) REFERENCES detection_rooms(room_id) ON DELETE CASCADE,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(doctor_id),
  FOREIGN KEY (nurse_id) REFERENCES nurses(nurse_id)
);

INSERT INTO room_usage
(room_id, patient_id, doctor_id, nurse_id, start_ts, end_ts, notes) VALUES
(1,1,1,1,'2025-01-10 09:00:00','2025-01-10 09:30:00','Routine check'),
(2,2,2,2,'2025-01-11 10:00:00','2025-01-11 10:45:00','ECG test'),
(3,3,3,3,'2025-01-12 11:00:00','2025-01-12 11:40:00','X-Ray scan'),
(4,4,4,4,'2025-01-13 12:00:00','2025-01-13 13:00:00','MRI scan'),
(5,5,5,5,'2025-01-14 09:30:00','2025-01-14 10:00:00','ENT exam'),
(6,6,6,6,'2025-01-15 10:30:00','2025-01-15 11:00:00','Eye test'),
(7,7,7,7,'2025-01-16 08:15:00','2025-01-16 09:00:00','Emergency treatment'),
(8,8,8,8,'2025-01-17 11:00:00','2025-01-17 11:45:00','Orthopedic exam'),
(9,9,9,9,'2025-01-18 10:00:00','2025-01-18 10:30:00','Skin consultation'),
(10,10,10,10,'2025-01-19 09:00:00','2025-01-19 09:30:00','Pediatric check');


SELECT visits.visit_id, patients.full_name, doctors.full_name, nurses.full_name, visits.status
FROM visits
INNER JOIN patients ON visits.patient_id = patients.patient_id
INNER JOIN doctors ON visits.doctor_id = doctors.doctor_id
INNER JOIN nurses ON visits.nurse_id = nurses.nurse_id
WHERE visits.status = 'completed'
ORDER BY visits.visit_id;

SELECT doctors.doctor_id, doctors.full_name
FROM doctors
LEFT JOIN doctor_nurse_assignment
ON doctors.doctor_id = doctor_nurse_assignment.doctor_id
WHERE doctor_nurse_assignment.doctor_id IS NULL
ORDER BY doctors.doctor_id;

SELECT room_usage.usage_id, detection_rooms.room_number, patients.full_name, doctors.full_name
FROM room_usage
INNER JOIN detection_rooms ON room_usage.room_id = detection_rooms.room_id
INNER JOIN patients ON room_usage.patient_id = patients.patient_id
INNER JOIN doctors ON room_usage.doctor_id = doctors.doctor_id
WHERE detection_rooms.room_type = 'Exam'
ORDER BY room_usage.usage_id;


SELECT payments.payment_id, patients.full_name, services.name, payment_items.subtotal
FROM payments
INNER JOIN patients ON payments.patient_id = patients.patient_id
INNER JOIN payment_items ON payments.payment_id = payment_items.payment_id
INNER JOIN services ON payment_items.service_id = services.service_id
WHERE payments.payment_method = 'Cash'
ORDER BY payments.payment_id;


SELECT ambulances.ambulance_id, ambulances.plate_number, nurses.full_name
FROM ambulances
LEFT JOIN nurses
ON ambulances.default_nurse_id = nurses.nurse_id
WHERE ambulances.status = 'available'
ORDER BY ambulances.ambulance_id;
