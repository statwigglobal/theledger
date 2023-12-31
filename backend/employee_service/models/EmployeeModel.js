const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema(
  {
    id: { type: String, required: false, unique: true },
    emailId: {
      type: String,
      default: null,
    },
    walletAddress: {
      type: String,
      default: null,
    },
    accountStatus: {
      type: String,
      default: "NOTAPPROVED",
    },
    otp: {
      type: String,
    },
    isConfirmed: { type: Boolean, default: false },
    firstName: {
      type: String,
      required: true,
      default: "Ashwini",
    },
    lastName: {
      type: String,
      required: true,
      default: "Ashwini",
    },
    photoId: {
      type: String,
      required: false,
      default: "default.jpg",
    },
    phoneNumber: { type: String, required: false, default: "" },
    preferredLanguage: { type: String, required: false, default: "EN" },
    jobTitle: { type: String, required: false, default: "junior Engineer" },
    department: { type: String, required: false, default: "engineering" },
    organisationId: {
      type: String,
      required: true,
    },
    warehouseId: { type: Array, required: false, default: "NA" },
    pendingWarehouseId: { type: Array, required: false, default: [] },
    affiliatedOrganisations: {
      type: Array,
      required: false,
    },
    role: { type: String, required: false, default: "powerUser" },
    msp: { type: String, required: false, default: "org1MSP" },
    postalAddress: {
      type: String,
      required: false,
      default: "Gachibowli, Hyderabad, India",
    },
    userDocuments: {
      type: Array,
      default: [],
    },
    isCustom: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Employee", EmployeeSchema);
