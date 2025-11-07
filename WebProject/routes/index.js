var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});


/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/contactme', function(req, res) {
  res.render('contactme', { title: 'Contact Me', successMessage: null });
});
router.post('/contactme', function(req, res) {
  var {Name, Email, Message} =req.body;
  console.log('Fake email received:', Name, Email, Message);

  res.render('contactme', { 
    title: 'Contact Me', 
    successMessage: '✅ Your message has been sent successfully!' 
  });
});



module.exports = router;

