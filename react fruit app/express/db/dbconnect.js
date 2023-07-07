const mysql=require("mysql")

var Mysql=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root123',
    database:'test',
    port:3306
});

Mysql.connect((err)=>{
    if(err){
        console.log("failed to connect"+JSON.stringify(err));
    }
    else{
        console.log("conected succesfully");
    }
})
module.exports=Mysql;