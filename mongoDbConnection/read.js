
const dbConnect=require("./mongodb");


// dbConnect().then((res)=>{
//    res.find({}).toArray().then((data)=>{
//     console.log(data);
//    })
// })


const main=async ()=>{
    let data=await dbConnect();
    data=await data.find({}).toArray();
    console.log(data);
}

main();