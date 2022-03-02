const isAuthenticated = (req, res, next) => {
  // console.log(req.user);
    if (req.user) {  // if user is logged in
      return next();
    }
    console.log("not logged in");
    // res.redirect('/')
    res.status(401).json({
      loggedIn: false,
      error: "You are not logged in"
    });
  }

  module.exports = isAuthenticated;