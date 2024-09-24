import { Router } from "express";
import connection from "./database/connection.js";

const routes = Router();

routes.get("/", (req, res) => {
	const sql = "SELECT * FROM products;";
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(result);
		}
	});
});

routes.get("/laptops", (req, res) => {
	const sql = "SELECT * FROM products WHERE category_id = 2;";
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(result);
		}
	});
});

routes.get("/phones", (req, res) => {
	const sql = "SELECT * FROM products WHERE category_id = 1;";
	connection.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(result);
		}
	});
});

routes.post("/add", (req, res) => {
	const { product_name, price, category_id } = req.body;
	const sql =
		"INSERT INTO products (product_name, price, category_id) VALUES (?, ?, ?);";

	connection.query(sql, [product_name, price, category_id], (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).json(err);
		} else {
			res.status(201).send(result);
		}
	});
});

routes.delete("/del/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const sql = "DELETE FROM products WHERE id = ?";

	connection.query(sql, id, (err, result) => {
		if (err) {
			console.log(err);
			res.status(400);
		} else {
			res.status(200).send("Product deleted successfully.");
		}
	});
});

export default routes;
