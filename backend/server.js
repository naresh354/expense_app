const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors())

app.use(express.json());

mongoose.connect("").then(() => console.log("MongoDB run suceessfully")).catch(err => console.log(err))





const authRoute = require("./routes/auth");
const expenseRoute = require("./routes/expenseDetails");

app.use("/user", authRoute);
app.use("/user", expenseRoute)

app.listen(8080 , () => {
    console.log("Server Listen successfully");
})