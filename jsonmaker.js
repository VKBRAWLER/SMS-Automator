const XLSX = require('xlsx')
const fs = require('fs');

const wb = XLSX.readFile('./ITR Pending.xlsx');
const wsname = wb.SheetNames[0];
const ws = wb.Sheets[wsname];
const arrItems = XLSX.utils.sheet_to_json(ws);
const filtered = arrItems.filter((e)=>{
    e.Code = e.Code.toString();
    e.PhoneNumber = e.PhoneNumber.toString();
    delete e.Date;
    if (e.Status === "b"){
        delete e.Status;
    return e
}

})
const arr = JSON.stringify(filtered);
fs.writeFile('ContactInfo.json', arr, (err) => { 
    if(err) { 
        throw err;
    }
    else{
        console.log("Data has been written to file successfully."); 
    }
    }); 
     