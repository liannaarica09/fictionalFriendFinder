var express = require('express');
var path = require('path');
var parser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});