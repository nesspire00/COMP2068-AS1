/* Display Home page */
exports.getHome = (req, res, next) => {
  res.render('index', { title: 'Home' });
};

/* Display About Me page */
exports.getAbout = (req, res, next) => {
  res.render('about', { title: 'Home' });
};

/* Display My Projects page */
exports.getProjects = (req, res, next) => {
  res.render('projects', { title: 'Home' });
};

/* Display Services page */
exports.getServices = (req, res, next) => {
  res.render('services', { title: 'Home' });
};

/* Display Contact page */
exports.getContact = (req, res, next) => {
  res.render('contact', { title: 'Home' });
};
