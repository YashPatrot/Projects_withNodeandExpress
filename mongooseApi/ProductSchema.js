const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    password:String,
    admin:Boolean
})

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
const Product=mongoose.model("Procuct",productSchema)
const User=mongoose.model("User",userSchema);

module.exports={
    Product,User
}

// module.exports=mongoose.model("Procuct",productSchema)




