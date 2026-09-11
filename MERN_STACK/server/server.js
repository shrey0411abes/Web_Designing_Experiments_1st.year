const express=require("express");
const cors= require("cors");
const app=express();
app.use(cors());
app.use(express.json);
app.get("/",(req,res)=>{
    res.send("server is running...");
});
//API
app.get("/api/message" , (req, res)=>{
    res.json({
        message: "hello from my Node.js API"
    });
});

//Massage API END
const PORT=5000; 
app.listen (PORT ,()=>{
    console.log(`sever running on port ${PORT}`);
});