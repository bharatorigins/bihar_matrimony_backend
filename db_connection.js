var mysql = require("mysql");

var con = mysql.createConnection({
  host: "biharmatrimony.cxmdo22vrb2m.us-west-2.rds.amazonaws.com",
  port : 3306,
  database: "bihar_matrimony_db",
  user: "db_user",
  password: "thatwillneverwork",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});
