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
exports.sendMessage = (req, res, next) => {
  console.log(req.body);

  const message = {
    from: 'Mykyta Naumenko',
    to: 'nesspire00@gmail.com',
    subject: 'test2',
    text: req.body.message,
  };

  const smtpConfig = {
    host: 'xo5.x10hosting.com',
    port: 465,
    secure: true,
    auth: {
      user: 'adm@nesspire00.x10.mx',
      pass: 'Qwerty9398896',
    },
  };

  const transporter = nodemailer.createTransport({
    host: 'xo5.x10hosting.com',
    port: 465,
    secure: true,
    auth: {
      user: 'adm@nesspire00.x10.mx',
      pass: 'Qwerty9398896',
    },
  });

  transporter.sendMail(message, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('SUCCESS! 2');
    }
  });

  res.redirect('/contact');
};

exports.contactFormSuccess = (req, res, next) => {
  console.log('Success');
};
