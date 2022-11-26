var mysql=require('mysql');

let con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1984'
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
});