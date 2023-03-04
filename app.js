const express = require("express");
const app = express();
const ejs = require("ejs");
const homeStartingContent =
  "This is a blog website. You can write your own blogs and read other's blogs.";
const aboutContent =
  "Welcome to our website! We are a small business that specializes in providing high-quality products and services to our customers. We strive to provide the best customer service possible and make sure that all of our customers are satisfied with their purchases. Our goal is to provide quality products at competitive prices, while also offering excellent customer service. We pride ourselves on being able to meet the needs of our customers and providing them with the best possible experience. Thank you for visiting us and we look forward to serving you!";
const contactContent =
  "Contact us : If you have any questions or would like to get in touch with us, please fill out the form below. We will respond as soon as possible. Thank you!";
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home", { homeStartingContent: homeStartingContent });
});
app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});
app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});
app.listen(port, () => console.log(`App listening on port ${port}!`));
