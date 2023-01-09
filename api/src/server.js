const app=require("./index")
const connect =require("./configs/db");
const dotenv=require("dotenv")
dotenv.config();

const PORT =process.env.PORT || 8000;
app.listen(PORT,async()=>{
    try {
        await connect;
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})