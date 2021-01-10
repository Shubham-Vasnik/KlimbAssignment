const express = require('express');
const mongoose = require('mongoose');

const applicantRoute = require('./routes/applicant');

// Express Setup

const app = express();

// PORT Setup

const PORT = process.env.PORT || 3001;

// MongoDB Setup

const mongo_URI = process.env.DB || "mongodb://localhost:27017/Klimb";

mongoose.connect(mongo_URI,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify:false})
.then( () => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
});

// Public Directory

app.use(express.static('public'));

// Body Parser

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// CORS Setup

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization,dbname,year"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


// Route Setup

app.use('/api/applicant',applicantRoute);


// Error Handling

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



// Listening For Requests

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});