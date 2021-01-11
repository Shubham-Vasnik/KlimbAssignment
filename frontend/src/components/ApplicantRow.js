import React from 'react'

const ApplicantRow = ({applicant, indx}) => {
    return (
        <tr>
            <th scope="row">{indx + 1 }</th>
            <td>{applicant.name}</td>
            <td>{applicant.email}</td>
            <td>{applicant.mobileNo}</td>
            <td>{applicant.dateOfBirth}</td>
            <td>{applicant.workExperience}</td>
            <td>{applicant.resumeTitle}</td>
            <td>{applicant.currentLocation}</td>
            <td>{applicant.postalAddress}</td>
            <td>{applicant.currentEmployer}</td>
            <td>{applicant.currentDesignation}</td>
        </tr>
    );
}

export default ApplicantRow;
