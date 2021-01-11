const Applicant = require('../models/Applicant');

const xlToJson = require('../helperFunctions/xlToJson');

const findApplicants = (req, res, next) => {

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
}



const addApplicants = (req, res, next) => {

    if(req.file){
        let file = `public/uploads/${req.file.filename}`;

        res.status(200).json({
            message:"File uploaded",
        });

        console.log(file);

        let response = xlToJson(file,'Sheet1');

        let applicants = response.map( data => ({
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
        }));  

        console.log(applicants);

        Applicant.create(applicants).then(
            result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
        }
        else{
            res.status(500).json(
                {   
                    error:{
                            message:"No file found",
                        }
                }
            )
        }
}

module.exports = {addApplicants, findApplicants };