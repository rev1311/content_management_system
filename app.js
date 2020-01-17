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
        choices: ["View all employees", "View all employees by department", "View all employees by title", "Update existing employee", "Add a new employee", "Add a new department", "Add a new title", "Exit"]
    }
];

const createEmpQs = [
    {
        name: "fname",
        message: "Enter employee's first name:",
        type: "input"
    },
    {
        name: "lname",
        message: "Enter employee's last name:",
        type: "input"
    },
    {
        name: "role",
        message: "Select employee's role:",
        type: "list",
        choices: ["Engineer", "Developer", "Associate"]
    }
];

const updateSelEmpQs = [
    {
        name: "select",
        message: "Which employee would you like to edit?",
        type: "input"
    }
];



function openingSalvo() {
    inquirer.prompt(openQs).then(function(res) {
        if (res.ask === "View all employees") {
            showAll();
        } else if (res.ask === "View all employees by department") {
            showAllbyDept();
        } else if (res.ask === "View all employees by title") {
            showAllbyRole();
        } else if (res.ask === "Update existing employee") {
            updateEmp();        
        } else if (res.ask === "Add a new employee") {
            createEmp();
        } else if (res.ask === "Add a new department") {
            createDept();
        } else if (res.ask === "Add a new title") {
            createRole();
        } else if (res.ask === "Exit") {
            return;
        }
    });
};

function showAll() {
    connection.query(`SELECT a.id, firstname, lastname, b.title, b.salary FROM employees a, role b WHERE a.role_id = b.title`, function(err, res) {
        if (err) throw err;
        console.table(res);
        openingSalvo();
    });
};

function showAllbyDept() {
    connection.query(`SELECT a.id, firstname, lastname, b.title, b.salary FROM employees a, role b WHERE a.role_id = b.title ORDER BY b.dept_id DESC`, function(err, res) {
        if (err) throw err;
        console.table(res);
    });
};

function showAllbyRole() {

};

function updateEmp() {

};

function createEmp() {
    inquirer.prompt(createEmpQs).then(function(res) {
        connection.query(`INSERT INTO employees (firstname, lastname, role_id) VALUES ("${res.fname}", "${res.lname}", "${res.role}")`);
        console.log(`${res.fname} ${res.lname} successfully added!`);
        openingSalvo();
    });
};

function createDept() {

};

function createRole() {

};