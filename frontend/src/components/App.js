import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AddApplicants from './AddApplicants';
import ApplicantList from './ApplicantList';

import Navbar from './Navbar';

const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={AddApplicants} />
                    <Route exact path='/applicants' component={ApplicantList} />
                </Switch>
            </Router>
        </div>
    );
}


export default App;