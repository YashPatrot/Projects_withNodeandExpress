const express=require("express");
const app=express();
const port=3000;

const posts=[
    {
        user:"Yash Patrot",
        post:"post-1"
    },
    {
        user:"Yashas",
        post:"post-2"
    }
]

app.use(express.json());

app.get("/posts",(req,res)=>{
    console.log(req.headers);
    res.send(req.headers);
    
   
    

})








app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})








