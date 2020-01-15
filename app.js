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