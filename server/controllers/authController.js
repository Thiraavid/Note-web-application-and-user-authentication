const User = require("../models/User");

exports.index_get = (req, res) => {
  res.render("index");
};

exports.register_get = (req, res) => {
  res.render("register");
};

exports.register_post = async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({ firstname, lastname, email, password });
    console.log(user);
    await user.save();
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing your request.");
  }
};

exports.login_get = (req, res) => {
  res.render("login");
};

exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.status(200).redirect("/homepage");
      } else {
        res.status(400).send("Invalid password");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.about_get = (req, res) => {
  res.render("about");
};
exports.faq_get = (req, res) => {
  res.render("faq");
};
exports.feature_get = (req, res) => {
  res.render("features");
};
