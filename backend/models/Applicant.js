const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    name:String,
    email:String,
    mobileNo:Number,
    dateOfBirth:Date,
    workExperience:String,
    resumeTitle:String,
    currentLocation:String,
    postalAddress:String,
    currentEmployer:String,
    currentDesignation:String
});

module.exports = mongoose.model("Applicant",applicantSchema);