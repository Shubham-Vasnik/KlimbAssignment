const express = require('express');

const Applicant = require('../models/Applicant');
const xlToJson = require('../helperFunctions/xlToJson');

const router = express.Router();


router.get('/', (req, res, next) => {

    Applicant.find().then(
        result => {
            res.status(200).json({
                message:"Found Applicants",
                applicants:result,
            });
        })
        .catch(err => {
            res.status(500).json({
                message:"No Applicant Found",
                error:err
            });
        })
});

router.post('/', (req, res, next) => {

    let response = xlToJson('./public/uploads/test.xlsx','Sheet1');

    let data = response[1];
    console.log(data);

    let applicant = {
        name:data['Name of the Candidate'],
        email:data['Email'],
        mobileNo:data['Mobile No.'],
        dateOfBirth:data['Date of Birth'],
        workExperience:data['Work Experience'],
        resumeTitle:data['Resume Title'],
        currentLocation:data['Current Location'],
        postalAddress:data['Postal Address'],
        currentEmployer:data['Current Employer'],
        currentDesignation:data['Current Designation']
    }

    console.log(applicant);

    Applicant.create(applicant).then(
        result => {
            res.status(200).json({
                message:"Applicants Added",
                applicants:result
            });
        })
        .catch(err => {
            res.status(500).json({
                message:"Unable to Add Applicants",
                error:err
            });
        })
});



module.exports = router;
