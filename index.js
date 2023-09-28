const express=require("express");
const app=express();
const PORT=4000;

app.get("/",(req,res)=>{
    res.send("Hello world, let's go Cloud");
})

app.listen(process.env.PORT || PORT,()=>console.log(`Listening on ${PORT}`))