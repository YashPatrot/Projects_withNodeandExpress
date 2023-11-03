
const dbConnect=require("./mongodb");


// dbConnect().then((res)=>{
//    res.find({}).toArray().then((data)=>{
//     console.log(data);
//    })
// })


const deleteOne=async ()=>{
    let data=await dbConnect();
    data=await data.deleteOne({name:"Asus Zen Phone Max Pro M1"});
    console.log(data);
   
}

deleteOne();