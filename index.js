const inquirer = require('inquirer')
const fs = require('fs')

// function write() {

//     startHtml() 
//     console.log("Hi")
    

// }

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
    
}]).then(function({name,role,id,email}){
    let roleInfo = '';
    if(role === "Engineer") {
        roleInfo = "GitHub Username"
    } else if (role === "Intern") {
        roleInfo = "school name"
    } else if (role === "Manager"){
        roleInfo = "office Phone Number"
    }
    inquirer.prompt([{
        type:"list",
        message:"Would you like to add another team member?",
        choices: [
            "yes",
            "no"
        ],
        name: "addMoreMembers"
    }])
    
})

// write()


