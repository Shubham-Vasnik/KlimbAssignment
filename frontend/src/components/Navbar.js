import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState('tab1');

    const currentTab = (tabName) => {
        setActive(tabName);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Klimb Assignment</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className={`nav-link ${active === 'tab1' ? 'active' : ''}`} aria-current="page" to='/' onClick={()  => currentTab('tab1')}>Add Applicants</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${active === 'tab2' ? 'active' : ''}`} to='/applicants' onClick={() => currentTab('tab2')}>View Applicants List</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
