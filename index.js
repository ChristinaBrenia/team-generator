//inquirer prompts user with questions
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager")


//jest runs tests
const jest = require("jest");

finalTeamArray = []

function promptUser() {
inquirer.prompt ([{
    //Team Manager
        type: "input",
        message: "Enter the name of your teammember:",
        name: "name"
},
{
    type: "input",
    name:"id",
    message: "Enter ID of manager:"
},
{
    type: "input",
    name:"email",
    message: "Enter the manager's email",
},
{
    type:"Input",
    name: 'phone',
    message:"Enter the manager's phone number:"

},
]).then(function (data) {
    const name = data.name
    const id = data.id
    const email = data.email
    const phone = data.phone
    const teamMember = new Manager (name, id, email, phone)
    finalTeamArray.push(teamMember)
    console.log(finalTeamArray)
})
}


promptUser()


