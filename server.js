const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const fileUpload = require('express-fileupload');


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static("public"));

require('./config/sessions')(app);


var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
