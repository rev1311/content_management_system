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
        choices: ["View all employees", "View all departments", "View all roles", "Update existing employee", "Add a new employee", "Add a new department", "Add a new role", "Exit"]
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
        choices: [1, 2, 3]
    }
];

const createDeptQs = [
    {
        name: "name",
        message: "Enter new department name:",
        type: "input"
    }
];

const createRoleQs = [
    {
        name: "title",
        message: "Enter new role's title",
        type: "input"
    },
    {
        name: "salary",
        message: "Enter new role's salary",
        type: "number"
    }
]

const updateSelEmpQs = [
    {
        name: "select",
        message: "Select employee ID to edit",
        type: "input"
    },
    {
        name: "role",
        message: `What is this employee's new role?`,
        type: "list",
        choices: ["1", "2", "3"]
    },

];



function openingSalvo() {
    inquirer.prompt(openQs).then(function(res) {
        if (res.ask === "View all employees") {
            showAll();
        } else if (res.ask === "View all departments") {
            showAllDept();
        } else if (res.ask === "View all roles") {
            showAllRole();
        } else if (res.ask === "Update existing employee") {
            updateEmp();        
        } else if (res.ask === "Add a new employee") {
            createEmp();
        } else if (res.ask === "Add a new department") {
            createDept();
        } else if (res.ask === "Add a new role") {
            createRole();
        } else if (res.ask === "Exit") {
            return connection.end();
        }
    });
};

function showAll() {
    connection.query(`SELECT a.id, firstname, lastname, b.title, b.salary FROM employees a LEFT JOIN roles b ON a.role_id = b.id ORDER BY a.id`, function(err, res) {
        if (err) throw err;
        console.table(res);
        openingSalvo();
    });
};

function showAllDept() {
    connection.query(`SELECT * FROM department`, function(err, res) {
        if (err) throw err;
        console.table(res);
        openingSalvo();
    });
};

function showAllRole() {
    connection.query(`SELECT * FROM roles`, function(err, res) {
        if (err) throw err;
        console.table(res);
        openingSalvo();
    });
};

function updateEmp() {
    inquirer.prompt(updateSelEmpQs).then(function(res) {
        connection.query(`UPDATE employees SET role_id = ${res.role} WHERE employees.id = ${res.select}`);
        console.log(`Employee ID ${res.select} has been successfully updated!`)
        openingSalvo();
    })
};

function createEmp() {
    inquirer.prompt(createEmpQs).then(function(res) {
        connection.query(`INSERT INTO employees (firstname, lastname, role_id) VALUES ("${res.fname}", "${res.lname}", "${res.role}")`);
        console.log(`${res.fname} ${res.lname} successfully added!`);
        openingSalvo();
    });
};

function createDept() {
    inquirer.prompt(createDeptQs).then(function(res) {
        connection.query(`INSERT INTO department (name) VALUES ("${res.name}")`);
        console.log(`${res.name} successfully added!`);
        openingSalvo();
    });
};

function createRole() {
    inquirer.prompt(createRoleQs).then(function(res) {
        connection.query(`INSERT INTO roles (title, salary, dept_id) VALUES ("${res.title}", "${res.salary}")`);
        console.log(`${res.name} successfully added!`);
        openingSalvo();
    });
};


