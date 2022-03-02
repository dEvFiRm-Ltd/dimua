const nodemailer = require('nodemailer');


const mailSend =(to,subject,text,html)=>{
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devfirmltd@gmail.com', // TODO: must add env variable
            pass: 'De^23092021' // TODO: must add env variable
        }
    });
    
    let mailDetails = {
        from: 'devfirmltd@gmail.com',
        to,
        subject,
        text ,
        html
    };
    
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs',err);
        } else {
            console.log('Email sent successfully');
        }
    });
}

module.exports = mailSend;
