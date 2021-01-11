import React,{useEffect, useState} from 'react';
import axios from 'axios';

import ApplicantRow from './ApplicantRow';

const ApplicantList = () => {

    const [applicants, setApplicants] = useState([]);

    const fetchApplicants = async () => {
       const res = await axios.get('http://localhost:3001/api/applicant/');

       console.log(res);

       setApplicants(res.data.applicants);
    }

    useEffect( () => {
        fetchApplicants();
    },[])

    return (
        <div>
            <h1 className="mt-3 ms-4 mb-3">Candidates : {applicants.length}</h1>
            <div className="applicants-table">
                <table class="m-1 table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Name of the Candidate</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Work Experience</th>
                        <th scope="col">Resume Title</th>
                        <th scope="col">Current Location</th>
                        <th scope="col">Postal Address</th>
                        <th scope="col">Current Employer</th>
                        <th scope="col">Current Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.map( (applicant, indx) => {
                            return <ApplicantRow applicant={applicant} indx={indx}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ApplicantList;
