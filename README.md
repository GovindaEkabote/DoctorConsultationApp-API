# 🩺 Doctor Consultant Platform

A scalable and secure Doctor Consultant Platform built with Node.js, Express.js, MongoDB, and Agora for real-time video consultations. The platform enables patients to book appointments, consult doctors through live video calls, manage payments, and access consultation history seamlessly.

---

# 🚀 Features

## 👨‍⚕️ Doctor Features
- Doctor Registration & Login
- Profile Management
- Availability & Slot Management
- Accept/Reject Appointments
- Video Consultation via Agora
- Prescription Upload
- Consultation History
- Earnings Dashboard

---

## 🧑‍💻 Patient Features
- User Registration & Authentication
- Search Doctors by Specialization
- Book Appointments
- Online Payment Integration
- Join Live Video Consultation
- View Prescriptions
- Appointment History

---

## 🔐 Authentication & Security
- JWT Authentication
- Password Hashing using bcryptjs
- Secure Cookie Handling
- Environment Variable Protection
- Input Validation
- CORS Security

---

## 📹 Real-Time Video Consultation
Integrated Agora RTC & RTM SDK for:
- HD Video Calls
- Real-time Messaging
- Token-based Secure Session Access

---

## 💳 Payment Gateway
Integrated Razorpay for:
- Appointment Payments
- Secure Transactions
- Payment Verification

---

## ⏰ Scheduling & Automation
- Cron Jobs for Appointment Reminders
- Automatic Session Expiry Handling
- Scheduled Notifications

---

# 🏗️ Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose ODM

## Authentication
- JWT (jsonwebtoken)
- bcryptjs

## Real-Time Communication
- Agora RTC SDK
- Agora RTM SDK
- Agora Token Generator

## Payment Gateway
- Razorpay

## File Uploads
- Multer

## Scheduling
- node-cron

## Utilities
- dotenv
- moment
- validator
- cookie-parser
- body-parser
- cors

---

# 📦 Installed Dependencies

```json
{
  "dependencies": {
    "agora-rtc-sdk": "^3.6.11",
    "agora-rtm-sdk": "^2.2.1",
    "agora-token": "^2.0.3",
    "bcryptjs": "^3.0.2",
    "body-parser": "^2.2.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "moment": "^2.30.1",
    "mongoose": "^8.13.2",
    "multer": "^1.4.5-lts.2",
    "node-cron": "^3.0.3",
    "razorpay": "^2.9.6",
    "validator": "^13.15.0"
  }
}

```

📁 Project Structure


doctor-consultant-app/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   └── app.js
│
├── uploads/
├── logs/
├── .env
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory.
PORT=5000

MONGO_URI=mongodb://localhost:27017/doctor_consultant

JWT_SECRET=your_jwt_secret

AGORA_APP_ID=your_agora_app_id
AGORA_APP_CERTIFICATE=your_agora_certificate

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

🔧 Installation
Clone Repository
git clone https://github.com/your-username/doctor-consultant-app.git


Navigate to Project
cd doctor-consultant-app

Install Dependencies
npm install

Run Development Server
npm run dev

Run Production Server
npm start


📡 API Modules
Authentication APIs
Register User
Login User
Logout User
JWT Verification
Doctor APIs
Create Doctor Profile
Update Doctor Profile
Manage Availability
Appointment Handling
Patient APIs
Book Appointment
View Appointment History
Join Consultation
Video Call APIs
Generate Agora Token
Join Video Session
End Consultation
Payment APIs
Create Razorpay Order
Verify Payment
Payment History

📹 Agora Video Call Flow
Patient books appointment
Doctor accepts appointment
Backend generates Agora token
Both users join secure video room
Consultation ends after session completion

🔒 Security Best Practices
Password Hashing with bcryptjs
JWT Access Protection
Secure Environment Variables
Input Validation
API Error Handling
Protected Routes
Payment Signature Verification

🚀 Future Enhancements
AI Chatbot Support
E-Prescription PDF Generation
Push Notifications
Real-time Chat
Admin Dashboard
Multi-language Support
Email & SMS Notifications

🧪 Testing
Recommended Tools:

Postman
Thunder Client

👨‍💻 Author
Govinda Ekbote

📄 License
ISC License

⭐ Support
If you like this project, give it a ⭐ on GitHub.

