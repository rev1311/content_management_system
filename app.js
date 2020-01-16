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
        message: "Select a topic:",
        type: "list",
        choices: ["Department", "Role", "Employee"]
    }
];

const deptMenuQs = [
    {
        name: "ask",
        message: "Select a task:",
        type: "list",
        choices: ["Create new Department", "View existing Department(s)", "Update existing Department"]
    }
];

const roleMenuQs = [
    {
        name: "ask",
        message: "Select a task:",
        type: "list",
        choices: ["Create new role", "View existing role(s)", "Update existing role"]
    }
];

const empMenuQs = [
    {
        name: "ask",
        message: "Select a task:",
        type: "list",
        choices: ["Create new employee", "View existing employee(s)", "Update existing employee"]
    }
];


function openingSalvo() {
    inquirer.prompt(openQs).then(function(res) {
        if (res.ask === "Department") {
            deptMenu();
        } else if (res.ask === "Role") {
            roleMenu();
        } else if (res.ask === "Employee") {
            empMenu();
        }
    });
};

function deptMenu() {
    inquirer.prompt(deptMenuQs).then(function(res) {
        if (res.ask === "Create new Department") {
            deptCreate();
        } else if (res.ask === "View existing Department(s)") {
            deptView();
        } else if (res.ask === "Update existing Department") {
            deptUpdate();
        }
    });
};

function roleMenu() {
    inquirer.prompt(roleMenuQs).then(function(res) {
        if (res.ask === "Create new role") {
            roleCreate();
        } else if (res.ask === "View existing role(s)") {
            roleView();
        } else if (res.ask === "Update existing role") {
            roleUpdate();
        }
    });
};