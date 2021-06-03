const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const fs = require('fs');
const mongoose = require("mongoose");
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApiDocumentation');

require("dotenv").config();
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const apiResponse = require("./helpers/apiResponse");

const dir = `images`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const app = express();

// DB connection
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  //don't show the log when it is test
  if(process.env.NODE_ENV !== "test") {
    console.log("Connected to %s", MONGODB_URL);
    console.log("App is running ... \n");
    console.log("Press CTRL + C to stop the process. \n");
  }
})
  .catch(err => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
var db = mongoose.connection;
//don't show the log when it is test
if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

//To allow cross-origin requests
app.use(cors());

//Route Prefixes
app.use("/", indexRouter);
app.use("/inventorymanagement/api/", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

module.exports = app;
