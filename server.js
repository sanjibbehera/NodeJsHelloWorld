var express    = require("express");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USERNAME,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});
var app = express();
const port = 3299

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

app.get("/fetchrows",function(req,res){
connection.query('SELECT id from temp LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.get('/', (req, res) => res.send('Hello World FROM SANJIB BEHERA LAXMI CHOWK HINJEWADI PUNE 411057!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
