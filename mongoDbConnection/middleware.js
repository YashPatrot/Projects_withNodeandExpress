const reqFilter=(req,res,next)=>{
    console.log("reqFilter");

    if(!req.query.age){
        res.send("Please provide age");
    }
    else if(req.query.age<18){
        res.send("You cannnot access this page , please provide age");
    }
    else{
        next();
    }
   

}

module.exports={reqFilter};