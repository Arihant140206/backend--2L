var express = require('express');
var router = express.Router();
const userModel = require("./users") //import karna ussers se



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/create", async function(req, res, next){
  const createduser = await  userModel.create({
     username: "Manan",
     name: "ARi",
     age:18,
  });
  res.send(createduser);
});
//.create se create hota hai document 
//.find se reading hota hai 
//.findOneAndDelete for deleting 
module.exports = router;
