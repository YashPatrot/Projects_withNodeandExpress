const {MongoClient}=require('mongodb');
// const MongoClient=require('mongodb').MongoClient;

const uri="mongodb+srv://YashPatrot:"+encodeURIComponent("Yash@777146")+"@cluster0.skfdnzm.mongodb.net/?retryWrites=true&w=majority";
const database='e-comm'
const client=new MongoClient(uri);

// if(client.connect()){
//     console.log("connected succesfully.");
// }
// else{
//     console.log("couldn't connect to the online database.");
// }

const dbConnect=async()=>{

    let result=await client.connect();
    // if(result){
    //     console.log("connected successfully")
    // }
    // else{
    //     console.log("Couldn't connect to the database.")
    // }
    let db=result.db(database);
    
    return db.collection('Products')
    // let data =await collection.find({name:"nokia 1100"}).toArray();
    // console.log(data);

}

module.exports=dbConnect;