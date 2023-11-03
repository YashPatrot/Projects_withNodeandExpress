const express=require("express");
//event emmitter is a class
//imported event class;
const EventEmitter=require("events");
const app=express();
const port=8000;
//Created object of the event.
const event=new EventEmitter();
let count=0;

//Created a function, which should be executed when
//the 'countAPI' is called.

event.on("countAPI",()=>{
    count++;
    console.log("Event called",count);
})

app.get("/",(req,res)=>{
    res.send("Api called");
    //Created an event, with the name: 'countAPI'.
    event.emit("countAPI");
})

app.get("/search",(req,res)=>{
    res.send("Search Api called");
    event.emit("countAPI");
})

app.get("/update",(req,res)=>{
    res.send("Update Api called");
    event.emit("countAPI");
})





app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})