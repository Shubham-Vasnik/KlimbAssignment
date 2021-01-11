const multer = require('multer');
const path = require('path');
const uuid = require("uuid");

const documentStorage = multer.diskStorage({
    destination:'./public/uploads',
    filename: function(req, file, cb){
        console.log(file);
        cb(null, uuid.v4().toString() + "_" + file.originalname);
    }
});

const documentUpload = multer({
    storage:documentStorage,
    limits:{fieldSize:10000000},
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
});

const checkFileType = (file, cb) => {
    const fileTypes = /xlsx|xls/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if(extName){
        return cb(null,true);
    }
    else{
        cb({message : 'Not an Excel file'});
    }
}

module.exports = {
    documentUpload,
}