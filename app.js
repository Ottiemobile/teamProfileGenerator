const fs = require('fs');
const path = require("path");
const bootstrap = require('bootstrap');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Choices = require('inquirer/lib/objects/choices');
const inquirer = require('inquirer');

const team = [];


function teamApp() {
startHtml();
addMember();

}

function addMember() {
    inquirer.prompt([
    {
        message: "Please enter a team member's name:",
        name: "name"
    },
    {
        type: "list",
        message: "Please choose the new crew member's role:",

        choices:
        [
            "Engineer",
            "Manager",
            "Intern"
        ],
        name: "role"
    },
    {
        message: "please enter the crew member's ID:",
        name: "id"
    },
    {
        message: "Enter the E-Mail of the new member:",
        name: "email"
    }
])
.then (function({name, role, id, email}){
    let roleInfo="";
    if(role === "Engineer"){
        roleInfo = "github username";
    } else if(role === "Manager") {
        roleInfo = "office phone number"
    } else {
        roleInfo === "school name"
    }
    inquirer.prompt([{
        message: `Enter crew member's ${roleInfo}`,
        name: "roleInfo"
    },
    {
        type: "list",
        message: "would you like to add more team members?",
        choices: ["yes", "no"],
        name: "moreMembers"
    }
])
.then(function({roleInfo, moreMembers}) {
    if(role === "Engineer"){
        newMember = new Engineer(name, id, email, roleInfo);
    } else if(role === "Manager") {
        newMember = new Manager(name, id, email, roleInfo);
    } else {
        newMember = new Intern(name, id, email, roleInfo);
    } 
    employees.push(newMember);
    addHtml(newMember)
    .then(function() {
        if(moreMembers === "yes") {
            addMember();
        } else {
            finishHtml();
        }
    })
})

});
}

function startHtml() {
    const html = `<!DOCTYPE html>`
    
}



