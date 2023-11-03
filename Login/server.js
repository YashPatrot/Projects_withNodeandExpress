const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();

const port=8000;

app.use(express.json());

const posts=[
{
    username:"kyle",
    title:'Post 1'
},
{
    username:"Jim",
    title:'Post 2'
},

]

app.get("/posts",(req,res)=>{
    res.json(posts);

})


app.post("/login",(req,res)=>{
    //Authenticate the user.

    const username=req.body.username;
    

})



app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})