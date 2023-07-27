const accountSid = 'AC4eb827589ddf98ac939097bc6e1af2d4';
const authToken = 'c321b8580578d73353521ea5e48c117b';
const client = require('twilio')(accountSid, authToken);
const s = [
    {
        "Code": "400840",
        "PAN": "ASIPP9683Q",
        "Name": "VARUN KHARKWAL",
        "PhoneNumber": "9456790295",
        "Status": "b"
    },
    {
        "Code": "401218",
        "PAN": "ACPPU9880M",
        "Name": "SAROJ KHARKWAL",
        "PhoneNumber": "87553333112",
        "Status": "b"
    },
    {
        "Code": "211396",
        "PAN": "AAHPY6432D",
        "Name": "PURAN SINGH",
        "PhoneNumber": "9412129175",
        "Status": "b"
    }
]
s.map((s)=>{z
client.messages
    .create({
        body: `Dear Sir/Ma'am,\nYour ITR is still pending. Please contact us to file your ITR immediately.\nThe last date of filling is 31 July 2023.\nName: ${s.Name}\nPAN: ${s.PAN}\n   -Varundeep Associates`,
        from: '+15312308351',
        to: `+919456790295`
    })
})
    .then(message => console.log(message.sid))
    .catch((err)=>{ console.log({err: err, msg: "this is error"})})