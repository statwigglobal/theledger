require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const apiResponse = require("./helpers/apiResponse");
const cors = require("cors");
const MONGODB_URL = process.env.MONGODB_URL;
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("swagger");
// import swaggerDocs from ("./utils/swagger")

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

// const swaggerSpec = swaggerJSDoc(options);
// const swaggerJSDoc = require('swagger-jsdoc');

mongoose
  .connect(MONGODB_URL, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //don't show the log when it is test
    if (process.env.NODE_ENV !== "test") {
      console.log("Connected to %s", MONGODB_URL);
      console.log("Employee Service is running ... \n");
    }
  })
  .catch((err) => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
const i18next = require("i18next");
const backend = require("i18next-fs-backend");
const i18nextMiddleware = require("i18next-http-middleware");

i18next
  .use(backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    // detection: {
    //   order: ["querystring", "cookie", "header"],
    //   lookupQuerystring: "lang",
    //   lookupCookie: "lang",
    //   lookupHeader: "accept-language",
    // },
    fallbackLng: "en",
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });

const app = express();
const swaggerOptions={
  failOnErrors: true,
  definition:{
    openapi: "3.0.0",
    info:{
      title: 'Employee Service API',
      version: '1.0.0'

    }
  },
  apis:['./routes/auth.js'],
};

const swaggerDocs= swaggerJsDoc(swaggerOptions);

//Routes




//don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev"));
}
app.use(i18nextMiddleware.handle(i18next));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//To allow cross-origin requests
app.use(cors());

//Route Prefixes
app.use("/", indexRouter);
app.use("/usermanagement/api/", apiRouter);
app.use(
'/apidocs',
swaggerUi.serve, 
swaggerUi.setup(swaggerDocs)
);


// throw 404 if URL not found
app.all("*", function (req, res) {
  return apiResponse.notFoundResponse(req, res, "Page not found");
});

app.use((err, req, res) => {
  if (err.name == "UnauthorizedError") {
    return apiResponse.unauthorizedResponse(req, res, err.message);
  }
});







module.exports = app;
