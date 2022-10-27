var express = require('express');
var router = express.Router();
var number1=Math.random()*10
var number2=Math.random()*10
var number3=Math.random()*10
var number4=Math.random()*10

var imulFunction=Math.imul(number1);
var logFunction=Math.log(number2);
var log10Function=Math.log10(number4)

/* GET computation page. */

router.get('/', function(req, res, next) {
  res.render('computation', { title:'Mounika Annabathina Computes Functions',
  number1:number1,
  number2:number2,
  number3:number3,
  number4:number4,

  imul:imulFunction,
  log:logFunction,
  log10:log10Function});    

});

module.exports=router;

    