DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
	dept_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
    PRIMARY KEY(dept_id)
);

CREATE TABLE role (
	role_id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	salary INT NOT NULL,
    FOREIGN KEY(dept_id) REFERENCES department(dept_id),
    PRIMARY KEY(role_id)
);


CREATE TABLE employees (
	emp_id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(20),
	lastname VARCHAR(20),
    FOREIGN KEY(role_id) REFERENCES role,
	FOREIGN KEY (manager_id) REFERENCES role,
	PRIMARY KEY (emp_id)
);

INSERT INTO employees (firstname, lastname)
VALUES ("Buck", "Doe"), ("Jane", "Houston"), ("Jim", "Hancock"), ("Will", "Black"),
("Felicia", "Knight"), ("Ben", "Sharpie"), ("Bill", "Shakespeare");

INSERT INTO role (title, salary)
VALUES ("Manager", 150000), ("Engineer", 200000), ("Developer", 100000), ("Associate", 100000);

INSERT INTO department (name)
VALUES ("Sales"), ("Production"), ("Admin")
