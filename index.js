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
    // writeHtml()
    promptUser2()
})
}

function promptUser2() {

inquirer.prompt ([{

    type: 'list',
    name: 'newTeammate',
    message: 'Do you want to add a new teammate?',
    choices: ['Add an engineer','Add an intern','Finish building my team'],


}]).then (function (data) {
        
    switch(data.newTeammate) {
        case "Add an engineer":
            console.log('engineer')
            break;

         case "Add an intern":
             console.log('intern')
             break;

         case "Finish building my team":
             console.log('Writing your file')
             writeHtml()
             break;
    }


})
}



function writeHtml () {
    
     
    for (let i = 0; i < finalTeamArray.length; i++ ) {
        
        const template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${finalTeamArray[0].name}</title>
            <link rel="stylesheet" type="text/css" href="./asset.css"/>
        </head>
        `;

        writeToFile(template)

        console.log(finalTeamArray[i].name)
    }

    

    
}

function writeToFile(data) {

    fs.writeFile(`./dist/index.html`, data, (err) => {
        if(err) {
            console.log(err)
        }
        console.log('your file is done')
    }
    

)}


    
// promptUser2 ()

promptUser()

