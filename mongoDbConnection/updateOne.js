
const dbConnect=require("./mongodb");


// dbConnect().then((res)=>{
//    res.find({}).toArray().then((data)=>{
//     console.log(data);
//    })
// })


const updateOne=async ()=>{
    let data=await dbConnect();
    data=await data.updateOne({category:"mobile"},{$set:{category:"Premium Mobiles"}});
    console.log(data);
   
}

updateOne();