import React, {useState} from 'react';
import axios from 'axios';

const AddApplicants = () => {

    const [selectedFile,setSelectedFile] = useState(null);

    const [message,setMessage] = useState({error:'',success:''});

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleFileSubmit = async (event) => {
        
        event.preventDefault();
        const data = new FormData();
        
        if(selectedFile){
            data.append('myFile',selectedFile, selectedFile.name);
        }

        axios.post('http://localhost:3001/api/applicant/', data).then(
            result => {
                console.log(result.data);
                if(result.data){
                    setMessage({success:result.data.message});
                }
            }
        )
        .catch(err => {
            if(err.response.data.error){
                console.log(err.response.data.message);
                setMessage({error:err.response.data.error.message});
            }
        }
        );
        
      }

      const renderMessage = ({error,success}) => {

        if(error){
            return (
                <div className="alert alert-danger mt-2" role="alert">
                    {error} 
                </div>
            );
        }

        if(success){
            return (
                <div className="alert alert-success mt-2" role="alert">
                    {success} 
                </div>
            );
        }
    }


    return (
        <div className="container my-5 ">

            <h3>Add Candidates to Database</h3>
            <div className="row justify-content-md-center my-5">
                <div className="col-lg-auto">
                    <form className="form row justify-content-center text-center" onSubmit={ e => handleFileSubmit(e)}>
                        <label htmlFor="excelfile" className="form-label">Upload a .xlsx or .xls file</label>
                        <div className="input-group">
                            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"  onChange={onFileChange} aria-label="Upload"/>
                            <button className="btn btn-primary" type="submit" id="inputGroupFileAddon04">Upload</button>
                        </div>
                    </form>
                    {renderMessage(message)}
                </div>
            </div>
        </div>
    );
}

export default AddApplicants;
