const express =require("express")
const cors=require("cors")
const app = express();

app.use(cors())
app.use(express.json());

// controllers
const application=require("./controllers/application.controller")


// user registration 
app.use("/", application)




module.exports=app