const mysql=require("mysql");

var SQLConnect=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root123',
    database:'test',
    port:3306

})

SQLConnect.connect((err)=>{
    if(err){
        console.log("not connected"+JSON.stringify(err));
    }else{
        console.log("db Connected");
    }
})

module.exports=SQLConnect;