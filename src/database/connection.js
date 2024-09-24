import mysql from "mysql2";

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "ecommerce_api",
});

connection.connect((err) => {
	if (err) {
		console.log("erro");
	} else {
		console.log("Connected to the database");
	}
});

export default connection;
