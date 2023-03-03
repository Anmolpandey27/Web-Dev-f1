const express=require('express');
const app= express();
const path=require('path');
const mongose=require('mongoose');
const { default: mongoose } = require('mongoose');
mongose.connect("mongodb://127.0.0.1/Crud_DB")
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err))

app.set('view engine', 'ejs');

app.set("views",path.join(__dirname, "views"))

app.get("/",(req,res)=>{
    res.render("index")
})
const { Schema } = mongoose;

const crudSchema = new Schema({
  title:  {
    type:String, // String is shorthand for {type: String}
    data:required
},
date:{
  type:String, // String is shorthand for {type: String}
  data :required
},
content:{
  type:String, // String is shorthand for {type: String}
  data:required
}});

app.post('/articles',function(req, res) {
  res.send('article',articles=articles);
});

app.get('/', function(req, res) {
  res.render('article_info',article=article);
});

app.get('/articles/:id', function(req, res) {
    res.render('ReadMore',article=article);
});

app.put('/articles/:id', function(req, res) {
  res.render('Edit',article=article);
});
app.delete('/articles/:id', function(req, res) {
   res.render('Delete',article=article);
});




app.listen(1000, () => {
    console.log("Server listen at Port 1000");
  });