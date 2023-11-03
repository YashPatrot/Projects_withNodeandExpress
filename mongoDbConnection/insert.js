const dbConnect=require("./mongodb");


const insertData=async ()=>{
    let data=await dbConnect();
    //Inserting a document inside product collection.
    data=await data.insertOne({name:"Asus Zen Phone Max Pro M1",brand:"Asus",price:300,category:"mobile"});
    //  data2=await data.find({}).toArray();
   if(data.acknowledged){
    console.log("Data inserted");
   }
   else{
    console.log("Data isn't inserted.")
   }
    
}

insertData();