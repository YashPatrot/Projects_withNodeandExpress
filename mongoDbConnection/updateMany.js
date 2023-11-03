
const dbConnect=require("./mongodb");


// dbConnect().then((res)=>{
//    res.find({}).toArray().then((data)=>{
//     console.log(data);
//    })
// })


const updateMany=async ()=>{
    let data=await dbConnect();
    data=await data.updateMany({category:"Premium Mobiles"},{$addToSet:{destinationCountry:"India"}});
    console.log(data);
   
}

updateMany();