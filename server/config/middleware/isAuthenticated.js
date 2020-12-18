module.exports = function(req, res, next) {
    console.log("hello", req.user);
    if (req.user) {
        return next();
    }
    return res.redirect("/login");
  };
  