const express = require('express');
const controller = require('../controllers/pagesController');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  controller.getHome(req, res, next);
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  controller.getAbout(req, res, next);
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  controller.getProjects(req, res, next);
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  controller.getServices(req, res, next);
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  controller.getContact(req, res, next);
});

module.exports = router;
