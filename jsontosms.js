const ContactInfo = require('./ContactInfo.json');
const fs = require('fs');
const Done = require('./Done.json');
console.log(Done);

const News = ContactInfo.filter( (con)=>{
    if (!Done.includes(con.Code)){
        return con;
    }
})

const output = JSON.stringify(News);
fs.writeFile("Status.json", output, (err) => { 
    if(err) { 
        throw err;
    }
    else{
        console.log("Data has been written to file as Status.json"); 
    }
});
