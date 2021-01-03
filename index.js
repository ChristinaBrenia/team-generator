const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt ([{
    //Team Manager
        message: "Enter the name of your teammember:",
        name: "name"
},

{
    type:'list',


    message: "Select their role:",
    choices: [
        "Engineer",
        "Intern",
        "Manager"
    ],
    name: "role"
    
    },

{

message: "Enter your team manager's employee ID:",
name: "id"

},

{

    message: "Enter your team manager's email address:",
    name: "email"
    
},

{

    message: "Enter your team manager's office number:",
    name: "officeNumber"
    
}])



