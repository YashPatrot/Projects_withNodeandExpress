
const dbConnect=require("./mongodb");


// dbConnect().then((res)=>{
//    res.find({}).toArray().then((data)=>{
//     console.log(data);
//    })
// })


const deleteMany=async ()=>{
    let data=await dbConnect();
    data=await data.deleteMany({name:"Asus Zen Phone Max Pro M1"})
    console.log(data);
   
}

deleteMany();