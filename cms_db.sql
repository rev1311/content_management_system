DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	salary INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(20),
	lastname VARCHAR(20),
	role_id VARCHAR(20) NOT NULL,
	-- manager_id VARCHAR(20) NULL,
	PRIMARY KEY (id)
);

INSERT INTO employees (firstname, lastname, role_id)
VALUES ("Buck", "Doe", "Engineer"), ("Jane", "Houston", "Associate"), ("Jim", "Hancock", "Associate"), ("Will", "Black", "Developer"),
("Felicia", "Knight", "Developer"), ("Ben", "Sharpie", "Associate"), ("Bill", "Shakespeare", "Developer");

INSERT INTO role (title, salary)
VALUES ("Engineer", 200000), ("Developer", 100000), ("Associate", 100000);

INSERT INTO department (name)
VALUES ("Sales"), ("Production"), ("Admin")

  