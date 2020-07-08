//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const date = require(__dirname+'/date.js');

const homeStartingContent = "“Our goals can only be reached through a vehicle of a plan, in which we must fervently believe, and upon which we must vigorously act. There is no other route to success.” —Pablo Picasso";
const aboutContent = "Created with Node.js and EJS , Practice Code by applekiwiejuice";
// const sampleContent = "I will achieve all of this in less than 3 years from now - 5 Vehicles (2 Sedans , 1 Pick-up , 1 Van and a 1 Truck) - Townhouse in Quezon City and Pasig City - Condominium in Makati City and Pasay City - Resort in Subic , Zambales - Rest House in Tagaytay or Antipolo (Overlooking) - 10 Types of successful E-commerce Businesses - Travel goals: Japan , Korea , France , UK , U.S. , Hong Kong and more - Millions of Bank Account Savings - College Plan and Insurances for my Wife and Children - 1 Major I.T. Firm These are my goals? What's yours?";

const app = express();

const posts = [];

app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/' , function (req , res) {
  res.render('home', {homeStartingContent: homeStartingContent, title: posts , blog: posts , arrayLength: posts.length , posts: posts , name: posts , date: posts});
});

app.get('/about', function (req , res) {
  res.render('about' , {aboutContent: aboutContent});
});

app.get('/contact', function (req , res) {
  res.render('contact' , {contactContent: contactContent});
});

app.get('/compose', function (req , res) {
  res.render('compose');
});

app.get('/posts/:postsName' , function (req , res) {

  const requestedTitle = req.params.postsName;
  posts.forEach(function(entry){
    const entryTitle = entry.title;
    if (_.lowerCase(requestedTitle) === _.lowerCase(entryTitle)) {
      res.render('post', {title: entryTitle , name: entry.name , blog: entry.blog , day: entry.day});
      console.log('Match Found');
    } else {
      console.log('Not a Match');
    }
  });
});

app.post('/compose', function (req , res) {
let day = date.getDate();
console.log(day);

const composition = {
  title: req.body.title ,
  blog: req.body.blog ,
  name: req.body.name ,
  day: day
};

posts.push(composition);

  // console.log(composition.title);
  // console.log(composition.blog);
  console.log(posts);

  res.redirect('/');
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
