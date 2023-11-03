const express=require("express");
const mongodb=require("mongodb");
const app=express();
const dbConnect=require("./mongodb");
const port =8000;


app.use(express.json());
app.get("/",async(req,res)=>{
    
    let data=await dbConnect();
   data=await  data.find({}).toArray()
    console.log(data);
    res.send(data);
    

})


app.post("/",async(req,res)=>{
   
    let data=await dbConnect();
    let result=await data.insertOne(req.body)
    res.send(result);
})


app.put("/",async(req,res)=>{
    let data=await dbConnect();
    let result=await data.updateMany({category:req.body.category},{$set:{category:req.body.updatedCategory}});
    res.send(result);
    // res.send(req.body[1]);

})


app.delete("/:id",async(req,res)=>{

    let data=await dbConnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    res.send(result);

})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

