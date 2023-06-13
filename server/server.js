const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit_form", (req, res) => {
  console.log(req.body); // This will log the form data to the console
  res.send("Form data received"); // This is the response sent back to the client
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
