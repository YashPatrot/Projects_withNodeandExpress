const express=require("express");
const app=express();
const multer=require("multer");
// const path=require("path");
// const uploadPathDirectory=path.join(__dirname+"/uploads");
// const upload=multer({dest:uploadPathDirectory});
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,res,cb){
            cb(null,'uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".png")
        }

    })
}).single("user_file")


const port=8000;


app.post("/profile",upload,(req,res)=>{
    res.send('Done');
})





app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})