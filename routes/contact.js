var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req, res, next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'info@gmail.com',
      pass: 'password'
    }
  });

  var mailOption = {
    from: 'Nescode <info@nescode.com>',
    to: 'emailaddress@gmail.com',
    subject: 'Website Submission',
    text: 'You have a new submission with following details..Name: '+req.body.name+ ' Email: '+req.body.email+ ' Message: '+req.body.message,
    html: '<p>You got a new submission with following detials</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };

  transporter.sendMail(mailOption, function(error, info){
    if(error){
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Send: '+info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
