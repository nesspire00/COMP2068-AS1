const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'My Projects' });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
