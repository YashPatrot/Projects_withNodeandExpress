const mongoose=require("mongoose");


const main=async ()=>{
   let result= await mongoose.connect("mongodb+srv://YashPatrot:"+encodeURIComponent("Yash@777146")+"@cluster0.skfdnzm.mongodb.net/e-comm?retryWrites=true&w=majority");
   const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number
   });

   const ProductsModel=mongoose.model('Products',ProductSchema);

   let data=new ProductsModel({name:"iphone 17 pro max",price:1000,brand:"apple",country:"India"});
   let finalData=await data.save();
   console.log(finalData);



  
   


}

main()







