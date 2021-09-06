require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const apiResponse = require("./helpers/apiResponse");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApiDocumentation');
const statusMonitor = require('express-status-monitor')({title:"Employee Service",path: '/usermanagement/api/status'});
// DB connection
const MONGODB_URL = process.env.MONGODB_URL;
const mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true ,useUnifiedTopology: true, useFindAndModify: false,useCreateIndex: true }).then(() => {
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("Employee Service is running ... \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});
const db = mongoose.connection;

var app = express();

if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(statusMonitor.middleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

//To allow cross-origin requests
app.use(cors());

//Route Prefixes
app.use("/", indexRouter);
app.use("/usermanagement/api/", apiRouter);

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
