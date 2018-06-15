/**
 * File: pagesController.js
 * Author: Mykyta Naumenko
 * Website: www.mykytanaumenko.me
 * Description: Controller file, responsible for displaying views
 * and supplying them with information.
 */

const nodemailer = require('nodemailer');

/* Display Home page */
exports.getHome = (req, res, next) => {
  res.render('index', { title: 'Home' });
};

/* Display About Me page */
exports.getAbout = (req, res, next) => {
  res.render('about', { title: 'About Me' });
};

/* Display My Projects page */
exports.getProjects = (req, res, next) => {
  res.render('projects', { title: 'My Projects' });
};

/* Display Services page */
exports.getServices = (req, res, next) => {
  res.render('services', { title: 'Services' });
};

/* Display Contact page */
exports.getContact = (req, res, next) => {
  res.render('contact', { title: 'Contact' });
};

/* Take in and send me a message from contact form */
exports.sendEmail = (req, res, next) => {
  /* get data into variables */
  const body = req.body;
  const name = body.name;
  const email = body.email;
  const message = body.message;

  const composedMessage = {
    text:
      'Someone has filled out the contact form!\n\n' +
      `Name: ${name} \n` +
      `Email Address: ${email} \n` +
      `Message: ${message} \n\n`,
    subject: 'Website form contact',
  };

  /* Create nodemailer SMTP transporter */
  const transporter = nodemailer.createTransport({
    host: 'xo5.x10hosting.com',
    port: 465,
    auth: {
      user: 'adm@nesspire00.x10.mx',
      pass: process.env.pass,
    },
  });

  transporter.sendMail(
    {
      from: 'mykytanaumenko.me <adm@nesspire00.m10.mx>',
      to: 'mykyta-naumenko@outlook.com',
      subject: composedMessage.subject,
      text: composedMessage.text,
    },
    (error) => {
      if (error) {
        return console.log(error);
      }
      res.redirect('/contact');
    },
  );
};
