const express = require("express");
const bcrypt = require("bcrypt");
require("./mongooseConfiguration");
const { Product, User } = require("./ProductSchema");
const mongodb = require("mongodb");
const app = express();
const port = 8000;

// const hashedPassword=await bcrypt.hash(req.body.password,10);

app.use(express.json());


app.get("/get", async (req, res) => {
  let data = await Product.find({});
  console.log(data);
  res.send(data);

  //in case if we wan't to find by the id
  //{_id:new mongodb.ObjectId('64f85252fb83183e5794619c')}
});

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  let result = await data.save();
  res.send(result);
  console.log(result);
  // res.send(req.body);
});

app.put("/update", async (req, res) => {
  let data = await Product.updateMany(
    { brand: "Samsung" },
    { $set: { brand: "South Korean Mobiles" } }
  );
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);
  // res.send(req.params);
  // console.log(req.params);
  // res.send(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
