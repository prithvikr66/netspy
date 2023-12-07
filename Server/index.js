import express from "express";
import cors from "cors";
const app = express();
const PORT = 4500;
 
// ritCTF{_1cy_penguin_j0y_}

app.get('/api/flag/1',(req,res)=>{
    res.set({
        "First-Part-of-the-flag": "ritCTF{_1cy_pen",
        "Hint-for-the-final-part-of-the-flag": "Focus on the api endpoint url"
         
    })
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    res.removeHeader("Etag")
    res.status(200).json({
        succes:true,
        message:"You are on the wrong side of things...you should be monitoring the network traffic of website"
    })
})
app.get('/api/flag/2',(req,res)=>{
       res.set({"Second-part-of-the-flag":"guin_j0y_}"})
       res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    //    res.cookie("Final-Part-of-the-Flag","guin_j0y_}",600)
       res.removeHeader("Etag")
       res.status(200).json({
        success:true,
        message:"You are just one step away from getting your final part of the flag"
       })
   
       
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})