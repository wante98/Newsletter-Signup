//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require();
const app = express();
// 為了使local端的圖片有用處 需要使用static
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

   const firstName = req.body.fName;
   const lastName = req.body.lName;
   const email = req.body.email;
   const data ={
     members:[
       {
         email_address: email
         status:"subscribed";
         merge_fields:{
           FNAME:firstNAME;
           LNAME:lastNAME;

         }
       }
     ]
   };

   const jsonData =JSON.stringify(data);
   const url="https://us1.api.mailchimp.com/3.0/lists/4bcf3cbb34";
   const options = {
     method:"POST";
     auth: "wayne1://59d4aa601eff78e80a7e86e9e7726a3c-us1";
   }
   https.request(url, options, function(response){

     if(response.statusCode ===200){
       res.send(__dirname + "/success.html");
     }else{
       res.send(__dirname + "/fail.html");
     }

   });
   const request = http.request(url,options, function(response))
   response.on("data", function(data){
     console.log(JSON.parse(data));
   })
   console.log(firstName,lastName, email);
   });

   request write(jsonData);

app.post("/fail",function(req,res){
  res.redirect("/")
})



app.listen(3000, function(){
  console.log("Server is running on port 3000");

});

//API key
//59d4aa601eff78e80a7e86e9e7726a3c-us1

// ListID
//4bcf3cbb34
