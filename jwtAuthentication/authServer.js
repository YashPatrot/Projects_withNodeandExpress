const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = 4000;

app.use(express.json());

let refreshTokens=[]

app.post('/token',(req,res)=>{
    const refreshToken=req.body.token;
    if(refreshToken==null)return res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err)return res.sendStatus(403);
        const accessToken=generateAccesToken({name:user.name});
        res.json({accessToken:accessToken});

            

        
    })


})


// app.get("/posts", (req, res) => {
//   res.json(posts.filter((post) => req.user.name === post.username));
// });

app.delete("/logout",(req,res)=>{
    refreshTokens=refreshTokens.filter(token=>token!=req.body.token);
    res.sendStatus(204);

})


app.post("/login", (req, res) => {
  //Authenticate user.
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccesToken(user);
  const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);


  res.json({ accessToken: accessToken,refreshToken:refreshToken });
});

function generateAccesToken(user){

    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'25s'});


}



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
