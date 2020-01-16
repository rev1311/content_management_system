const inquirer = require('inquirer');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localHost",
    port: 3306,
    user: "root",
    password: "pass",
    database: "cms_db"

});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Successfully connected as ' + connection.threadId);
    openingSalvo();
});

const openQs = [
    {
        name: "ask",
        message: "Select an option:",
        type: "list",
        choices: ["View all employees", "View all employees by department", "Add a new employee", "Update existing employee", "Exit"]
    }
];


function openingSalvo() {
    inquirer.prompt(openQs).then(function(res) {
        if (res.ask === "View all employees") {
            showAll();
        } else if (res.ask === "View all employees by department") {
            showAllbyDept();
        } else if (res.ask === "Add a new employee") {
            createEmp();
        } else if (res.ask === "Update existing employee") {
            updateEmp();
        } else if (res.ask === "Exit") {
            return;
        }
    });
};

function showAll() {
    connection.query(`SELECT * FROM employees a, role b WHERE a.role_id = b.id`, function(err, res) {
        if (err) throw err;
        console.table(res);
    })
};

function showAllbyDept() {
    connection.query(`SELECT * FROM employees SORT BY dept_id DESC`, function(err, res) {
        if (err) throw err;
        console.table(res);
    })
};

function createEmp() {
    inquirer.prompt(createEmpQs).then(function(res) {
        connection.query(`INSERT INTO employees (firstname, lastname, role_id) VALUES ("${res.fname}", "${res.lname}", ${res.role})`);
        
    })
};