const express=require('express');
const bodyParser = require('body-parser');

 const path=require('path');

const port=8000;

const app=express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('assets'));
 app.set('view engine', 'ejs');
 app.set('views',path.join(__dirname, 'views'));

  const contactList=[
      {
        name : "chandan Kumar",
        mob_no: "6542323232",
        email : "ck90454@gmail.com"
      },
      {
        name : "Ujjawal Kumar",
        mob_no: "2111123232",
        email : "ck9990454@gmail.com"
      },
      {
        name : "Kundan Kumar",
        mob_no : "7549923232",
        email : "ck99998454@gmail.com"
      }
  ];
app.get('/',function(req,res){
    // console.log("hiii");
    return res.render('home',{val:6,title:"first express app",contact_list:contactList});
     res.send('hiii chandsn   cdssssdddd');
});
app.post('/create-contact',function(req,res){
  
    contactList.push({
        name : req.body.Myname,
      mob_no : req.body.mob_no,
      email : req.body.email
    });
    return res.redirect('/');
});
 app.get('/delete-contact/:email',function(req,res){
    console.log(req.params);
    let email=req.params.email;
    let contactIndex=contactList.findIndex(contact => contact.email==email);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
 });
app.listen(port,function(err){
       
    console.log("Yup, My express server");
});