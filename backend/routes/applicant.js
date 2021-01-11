const express = require('express');

const {documentUpload} = require('../middleware/fileHelper');
const { findApplicants, addApplicants } = require('../controllers/applicant');

const router = express.Router();


router.get('/', findApplicants);

router.post('/', documentUpload.single('myFile'), addApplicants );



module.exports = router;
