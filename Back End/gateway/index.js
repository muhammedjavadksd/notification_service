
//Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const proxy = require("express-http-proxy")

//Config
dotenv.config("./.env");

//const
const PORT = process.env.PORT || 7001
const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT
const PROFILE_ENDPOINT = process.env.PROFILE_ENDPOINT

app.use((req, res, next) => {
    // console.log("Request came")
    next()
})

console.log("Profile service endpoint", PROFILE_ENDPOINT);

//middleware
app.use("/api/auth", proxy(AUTH_ENDPOINT))
app.use("/api/profile", proxy(PROFILE_ENDPOINT))



app.listen(PORT, () => {
    console.log("Gateway started at Port : " + PORT)
})