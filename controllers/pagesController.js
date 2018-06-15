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
