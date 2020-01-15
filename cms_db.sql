DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	salary INT NOT NULL,

);


CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(20),
	lastname VARCHAR(20),
	FOREIGN KEY (id) FROM role(id),
	PRIMARY KEY (id)
);
