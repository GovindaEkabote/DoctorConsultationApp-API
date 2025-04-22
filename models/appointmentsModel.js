const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
    required: true,
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: "PhoneUser",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  appointmentType: {
    type: String,
    enum: ["Audio", "Video", "In-person"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
  },
  doctorFees:{
    type:Number,
  },
 
  callStatus: { 
    type: String, 
    enum: ["Not Started", "In Progress", "Completed", "Cancelled", "Failed"], // Added "Failed" status
    default: "Not Started" 
  },
  callStartTime: { 
    type: Date,
    index: true // Add index for better query performance
  },
  callEndTime: Date,
  callDuration: { 
    type: Number, // in seconds
    min: 0 // Ensure non-negative
  },
  agoraChannelName: {
    type: String,
    unique: true, // Ensure channel names are unique
    sparse: true  // Allow null values
  },
  agoraTokens: {
    doctor: {
      token: String,
      issuedAt: { type: Date, default: Date.now },
      expiresAt: Date // Track token expiration
    },
    patient: {
      token: String,
      issuedAt: { type: Date, default: Date.now },
      expiresAt: Date
    }
  },
  callQualityMetrics: { // Optional: Track call quality
    doctorRating: { type: Number, min: 1, max: 5 },
    patientRating: { type: Number, min: 1, max: 5 },
    networkIssues: { type: Number, default: 0 }
  }
 
}, { timestamps: true });

module.exports = mongoose.model("Appointment",appointmentSchema)