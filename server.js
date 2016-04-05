var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 7000;
var cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/contact', function(req, res) {
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://sheffne@gmail.com:Sheff112@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"'+req.body.name+' 👥" <'+req.body.email+'>', // sender address
    to: 'jeremy@sheffmachine.com', // list of receivers
    subject: 'Website Contact Form', // Subject line
    text: req.body.message, // plaintext body
    html: '<p>'+req.body.message+'</p>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
    	res.status(500).send();
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.header('Access-Control-Allow-Origin').status(200).send();
});
});



console.log('app listening on port ' + PORT);

app.listen(PORT);
