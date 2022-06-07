const express = require('express')
const path = require("path")
// const fs = require("fs");
const app = express()
const port=8000;
 const mongoose = require('mongoose');
 const bodyparser=require('body-parser')
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/salonappoinment');  }












//  Making of schema (mongoose)
 const contactSchema = new mongoose.Schema({
   name: String,
   age:String,
   myDate:String,
   myEmail: String,
   phone: String,
   messsage: String,
   desc:String,
   slot:String

 });
const contact = mongoose.model('contact', contactSchema);
 
    
 

  
  app.use(express.urlencoded()) // middleware for getting data

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static('static')) // For serving static files





// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set("views", path.join(__dirname, "views")) // Set the views directory
 



// ENDPOINTS
app.get('/', (req, res)=>{
    
    
    res.status(200).render("index.pug");
})
app.get('/about', (req,res)=>{
  res.status(200).render('about.pug')

})
app.get('/about',(req,res) => {
  res.render("about.pug")
})
app.get('/contact', (req,res)=>{
  res.status(200).render('contact.pug')

})
app.post('/contact', (req, res)=>{
    console.log(req.body)
    var myData = new contact(req.body)
    myData.save().then(()=>{
      res.send("this item has been saved in the data-base")
    }).catch(()=>{
        res.status(404).send("item has not been saved in the data base")      
    })
    
   
  
})




// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});