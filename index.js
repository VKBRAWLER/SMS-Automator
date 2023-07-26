// const express = require("express");
// const router = require('router')
// const app = express.Router()
// const port = 3000

// app.listen(port, ()=>{
//     console.log(`http://localhost:${port}`);
// })
const accountSid = 'AC4eb827589ddf98ac939097bc6e1af2d4';
const authToken = 'b9755645c055224da48b2cf75ac96c57';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello Dear, This one was successfull',
        from: '+15312308351',
        to: '+919456790295'
    })
    .then(message => console.log(message.sid))
    .catch((err)=>{ console.log(err)})