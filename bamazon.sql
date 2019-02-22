DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
    -- add auto_increment to next line, VScode syntax is off on sql files for some reason
	item_id INTEGER(10) NOT NULL, 
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(10) NOT NULL,
    quantity INTEGER(10) NOT NULL,
    primary key(item_id)
);

INSERT INTO products(product_name, department_name, price, quantity) VALUES 
("bag", "home", 5, 50),
("chair", "home", 30, 70),
("laptop", "tech", 10, 400),
("beanie", "clothing", 20, 100),
("pants", "clothing", 50, 120),
("blanket", "home", 30, 90),
("iphone", "tech", 5, 900),
("goldfish", "food", 30, 12),
("beans", "food", 10, 4),
("headphones", "tech", 500, 70);

SELECT * FROM products;

