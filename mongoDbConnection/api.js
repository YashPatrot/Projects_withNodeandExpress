const express=require("express");
const app=express();
const dbConnect=require("./mongodb");
const port =8000;

app.get("/",async(req,res)=>{
    
    let data=await dbConnect();
   data=await  data.find({}).toArray()
    console.log(data);
    res.send(data);
    

})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

