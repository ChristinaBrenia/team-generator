//inquirer prompts user with questions
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")


//jest runs tests
const jest = require("jest");

finalTeamArray = []

function promptUser() {
inquirer.prompt ([{
    //Team Manager
    type: "input",
    message: "Enter the name of your manager:",
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
    message: "Enter the manager's email:",
},
{
    type:"input",
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
            engineer ()
            break;

         case "Add an intern":
             console.log('intern')
             intern ()
             break;

         case "Finish building my team":
             console.log('Writing your file')
             writeHtml()
             break;
    }


})
};

function engineer () {
    inquirer.prompt([{

        type:"input",
        name: 'name',
        message:"What is the Engineer's name?"
    },
    {

        type:"input",
        name: 'id',
        message:"What is the Engineer's ID?"
    },
    {

        type:"input",
        name: 'email',
        message:"What is the Engineer's email?"
    },
    {

        type:"input",
        name: 'gitHub',
        message:"What is the GitHub username?"
    },
])
.then(function (data) {
    const name = data.name
    const id = data.id
    const email = data.email
    const gitHub = data.gitHub
    const teamMember = new Engineer (name, id, email, gitHub)
    finalTeamArray.push(teamMember)
    console.log(finalTeamArray)
    promptUser2()


})
}

function intern (){

inquirer.prompt ([{

    type:"input",
    name: 'name',
    message:"What is your interns name?"
},
{

    type:"input",
    name: 'id',
    message:"What is your interns ID?"
},
{

    type:"input",
    name: 'email',
    message:"What is your interns email?"
},
{

    type:"input",
    name: 'school',
    message:"What is your interns school?"
}
])
.then(function (data) {
    const name = data.name
    const id = data.id
    const email = data.email
    const school = data.school
    const teamMember = new Intern (name, id, email, school)
    finalTeamArray.push(teamMember)
    console.log(finalTeamArray)
    promptUser2()


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
    <title>My Team Profile</title>
    <link rel="stylesheet" type="text/css" href="./asset.css"/>
</head>
<body>

    <div class="header-wrap">
         <div class="centered-with-padding">
             <h1>My Team Profile</h1>
         </div>
     <!-- Area where team mate profile info will be -->
        <div class="team-wrapper">
         <div class="flex-team">
             <!--Teamate profiles: Manager-->
              <div class="profile-card">
                <h2>${finalTeamArray[0].title}</h2>
                <h3>${finalTeamArray[0].name}</h3>
                <p>${finalTeamArray[0].id}</p>
                <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[0].email}</a><br/>
                <p>${finalTeamArray[0].phone}</p>
              </div>

              <!--Teamate profiles: Engineer-->
              <div class="profile-card">
                <h2>${finalTeamArray[i].title}</h2>
                <h3>${finalTeamArray[i].name}</h3>
                <p>${finalTeamArray[i].id}</p>
                <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a><br/>
                <a target="_blank" href="https://github.com/${finalTeamArray[i].gitHub}">GitHub</a>
                </p>
              </div>

              <!-- Intern -->
              <div class="profile-card">
                <h2>${finalTeamArray[i].title}</h2>
                <h3>${finalTeamArray[i].name}</h3>
                <p>${finalTeamArray[i].id}</p>
                <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a><br/>
                <p>${finalTeamArray[i].school}</p>
              </div>
               
         </div>
        </div>


    </div>

    
</body>
</html>
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


    

promptUser()

