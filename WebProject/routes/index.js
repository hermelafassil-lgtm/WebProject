var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});


/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* Get Project page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Get contact Me page */

router.get('/contactme', function(req, res) {
  res.render('contactme', { title: 'Contact Me', successMessage: null });
});

/* Router post to get emails */
router.post('/contactme', function(req, res) {
  var {Name, Email, Message} =req.body;
  console.log('Fake email received:', Name, Email, Message);


/*Renders the contact me */
  res.render('contactme', { 
    title: 'Contact Me', 
    /* Prints the message is the users message has ben sent successfully */
    successMessage: ' Your message has been sent successfully!' 
  });
});


/* Node.js statement used to export a router object from one file to another file */
module.exports = router;

