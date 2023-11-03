const mongoose=require("mongoose");
const mongodb=require("mongodb");

mongoose.connect("mongodb+srv://YashPatrot:"+encodeURIComponent("Yash@777146")+"@cluster0.skfdnzm.mongodb.net/e-comm?retryWrites=true&w=majority");
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    brand:String
   });



const saveInDb=async ()=>{
   

   const ProductsModel=mongoose.model('Products',ProductSchema);

   let data=new ProductsModel({name:"iphone 19 pro max",price:1000,brand:"Apple",category:"Mobile"});
   let finalData=await data.save();
   console.log(finalData);

}


const updateInDb=async()=>{

    const ProductsModel=mongoose.model("Product",ProductSchema);
    let data = await ProductsModel.updateOne({
        name:"samsung Galaxy S 30"
    },
    {$set:{
        name:"samsung Galaxy S 40",
        category:"Korean Mobiles"
        
    }})
    console.log(data);

}

const deleteInDb=async()=>{
    const ProductsModel=mongoose.model("Product",ProductSchema);
    let data=await ProductsModel.deleteMany({name:"iphone 15 pro max"});
    console.log(data);

    //in case if we wan't to delete with the respective id field;
    //{_id:new mongodb.ObjectId('64f83a18ed1f7a5c842bf3d0')}


}

const findInDb=async()=>{
    const  ProductsModel=mongoose.model("Product",ProductSchema);
    let data=await ProductsModel.find({name:'iphone 19 pro max'});
    console.log(data);
}

findInDb();

// deleteInDb();



















// updateInDb();







// updateInDb();

// const updateInDb=async()=>{
//     let result= await mongoose.connect("mongodb+srv://YashPatrot:"+encodeURIComponent("Yash@777146")+"@cluster0.skfdnzm.mongodb.net/e-comm?retryWrites=true&w=majority");
//     const ProductSchema=new mongoose.Schema({
//      name:String,
//      price:Number,
//      category:String,
//      brand:String
//     });
 
//     const ProductsModel=mongoose.model('Products',ProductSchema);
 
//     let data=new ProductsModel({name:"iphone 17 pro max",price:1000,brand:"Apple",category:"Mobile",buyer:"Yash Patrot"});
//     let finalData=await data.save();
//     console.log(finalData);

// }









