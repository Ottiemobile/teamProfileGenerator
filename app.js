const fs = require('fs');
const path = require("path");
const bootstrap = require('bootstrap');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Choices = require('inquirer/lib/objects/choices');

const team = [];


// function teamApp() {
// startHtml();
// addMember();

// }

// function addMember() {
//     inquirer.prompt([
//     {
//         message: "Please enter a team member's name:",
//         name: "name"
//     },
//     {
//         type: "list",
//         message: "Please choose the new crew member's role:",

//         choices:
//         [
//             "Engineer",
//             "Manager",
//             "Intern"
//         ],
//         name: "role"
//     },
//     {
//         message: "please enter the crew member's ID:",
//         name: "id"
//     },
//     {
//         message: "Enter the E-Mail of the new member:",
//         name: "email"
//     }
// }])


// .then (function({roleInfo, moreMembers}){
//     let newEmployee;

//     if (role === "Intern"){
//         newEmployee = new Intern(name, id, email, roleInfo);
//     } else if (role === "Engineer"){
//     newEmployee = new Engineer(name, id, email, roleInfo);
//     } else {
//         newEmployee = new Manager(name, id, email, roleInfo);
//     }
//     team.push(newEmployee);
//     addHtml(newEmployee)
//         .then(function() {
//             if(moreMembers === "yes") {
//                 addMember();
//             } else {
//                 finishHtml();
//             }
//         });
// });






// teamApp();
