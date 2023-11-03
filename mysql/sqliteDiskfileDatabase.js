const sqlite3=require("sqlite3").verbose();
let db=new sqlite3.Database("./db/chinook.db",(err)=>{
    if(err){
        return console.error(err.message);

    }
    console.log("Connected to the chinook database.")
    
}
);


db.all


db.close((err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log("Close the database connection.");
})