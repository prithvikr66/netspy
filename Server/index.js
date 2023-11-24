import express from "express";
import cors from "cors";
const app = express();
const PORT = 4500;

app.get('/api/flag/1',(req,res)=>{
    res.set({
        "First-Part-of-the-flag": "FlAG_1_HERE",
         "Hint-For-Last-Part-Of-Flag": "focus on the api endpoint"
    })
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.removeHeader("Etag")
    res.status(200).json({
        succes:true,
        message:"You are on the wrong side of things...you should be monitoring the network traffic of website"
    })
})
app.get('/api/flag/2',(req,res)=>{
    res.header("Final-Part-Of-The-Flag", "flag2")
       res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
       res.removeHeader("Etag")
       res.status(200).json({
        success:true,
        message:"You are just one step away from getting your final part of the flag"
       })
       
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})