DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;
USE cms_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
	deptname VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	salary INT NOT NULL,
    -- FOREIGN KEY(id) REFERENCES department(id),
    PRIMARY KEY(id)
);


CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
	firstname VARCHAR(20),
	lastname VARCHAR(20),
--     FOREIGN KEY(id) REFERENCES role(title),
-- 	FOREIGN KEY (id) REFERENCES role(id),
	PRIMARY KEY (id)
);
