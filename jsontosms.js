const ContactInfo = require('./ContactInfo.json');
const fs = require('fs');

const NotInWhatsapp = ["400326", "102779", "400916", "212112", "211815", "401108", "102146", "211398", "100747", "400447", "212140", "211396", "210389", "212187", "103963", "101380", "212164", "101709", "101741", "400642", "103514", "102205", "102337", "103964", "105074", "103247", "212167"]

// console.log(NotInWhatsapp.includes(ContactInfo[0].Code))
const News = ContactInfo.filter( (con)=>{
    if (NotInWhatsapp.includes(con.Code)){
        con.Status = "blank";
    }
    return con;
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
