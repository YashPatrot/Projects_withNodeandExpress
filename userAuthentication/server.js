const express=require("express");
const app=express();
const bcrypt=require("bcrypt");
const port =8000;

app.use(express.json());

let  users=[
    
]



app.get("/users",(req,res)=>{
    res.json(users);
})

app.post("/users",async(req,res)=>{
try{
    // const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    console.log(hashedPassword);
    // console.log(salt);
    // console.log(userPassword);
const user=
{
   name:req.body.name,
   password:hashedPassword
}
users.push(user);

res.status(201).send("successfully entered the creadentials required to save the user in database.");
}

catch(err){
    res.status(500).send();
}


    // const user=
    // {
    //    name:req.body.name,
    //    email:req.body.password
    // }
    // users.push(user);
    
    // res.status(201).send()
})


app.post("/users/login",async(req,res)=>{
    const user=users.find(user=>user.name=req.body.name);
    
    if(user==null){
      return res.status(400).send("Cannot find user");
    }

    try{
       if(await  bcrypt.compare(req.body.password,user.password)){
        return res.status(200).send("The user has logged in successfully.");

       }
       else{
        res.status(400).send("The user may have entered wrong password, Please check it once");

       }
      

    }
    catch(err){
        res.send(new Error("Couldn't be able to login due to unfound error."))

    }

})


app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})
