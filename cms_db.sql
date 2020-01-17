DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	salary INT NOT NULL,
    dept_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(dept_id) REFERENCES department(id)
);

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(20),
	lastname VARCHAR(20),
	role_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY(role_id) REFERENCES roles(id)
);

INSERT INTO department (name)
VALUES ("Sales"), ("Production"), ("Admin");


INSERT INTO roles (title, salary, dept_id)
VALUES ("Engineer", 200000, "2"), ("Developer", 100000, "2"), ("Associate", 100000, "1");


INSERT INTO employees (firstname, lastname, role_id)
VALUES ("Buck", "Doe", "1"), ("Jane", "Houston", "3"), ("Jim", "Hancock", "3"), ("Will", "Black", "2"),
("Felicia", "Knight", "2"), ("Ben", "Sharpie", "3"), ("Bill", "Shakespeare", "2");



  