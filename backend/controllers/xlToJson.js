const xlsx = require('xlsx');

const xlToJson = (filePath, sheetName) => {

    const wb = xlsx.readFile(filePath, {cellDates:true});

    const ws = wb.Sheets[sheetName];

    let data = xlsx.utils.sheet_to_json(ws);

    return data;

}

console.log(xlToJson('../test.xlsx', 'Sheet1')[0]);