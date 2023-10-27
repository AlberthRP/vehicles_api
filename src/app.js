const express = require("express");
const cors = require("cors");

//Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//GLobal Vatiables

//Routes
app.use("/api/vehicles", require('./routes/vehicles'));
app.use("/api/access", require('./routes/access'));

module.exports = app;
