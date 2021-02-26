// const Employee = require('./library/employee');
// const Manager = require('./library/manager');
// const Engineer = require('./library/engineer');
// const Intern = require('./library/intern');
// const createMgrCard = require('./templates/mgrTemplate');
// const createEngCard = require('./templates/engTemplate');
// const createInternCard = require('./templates/internTemplate');
// const teamArrExport = require('./roster');

// const teamArr = [];

// const manager = new Manager ("Bob", 1, "emailMG", 10);
// const engineer = new Engineer ("Eng", 2, "emailE", 11);
// const intern = new Intern ("Intern", 3, "emailIN", 12);
// teamArr.push(manager);
// teamArr.push(engineer);
// teamArr.push(intern);

// const rosterArr = [];

// const teamMapArr = teamArr.map(employee => {
   
//     const teamMember = { ...employee };
//     if (teamMember.office) {
//         rosterArr.push(createMgrCard(teamMember));
//     }
//     if (teamMember.github) {
//         rosterArr.push(createEngCard(teamMember));
//     }
//     if (teamMember.school) {
//         rosterArr.push(createInternCard(teamMember));
//     }
// });


// module.exports = rosterArr => {
//     return `<!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
//         <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
//         <script src="https://kit.fontawesome.com/9834d6982e.js" crossorigin="anonymous"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//         <link rel="stylesheet" href="./assets/style.css" />
    
//         <title>Team Roster</title>
    
//     </head>
    
//     <body>
//         <div class="container center">
//             <h1>Welcome, team!</h1>
//             <div class="row">
//                 <div class="col s4 m4 center">
//                     <i class="fas fa-bolt fa-2x leader"></i><span>Leader</span>
//                 </div>
    
//                 <div class="col s4 m4 center">
//                     <i class="fas fa-cog fa-2x eng"></i><span>Engineer</span>
//                 </div>
    
//                 <div class="col s4 m4 center">
//                     <i class="fas fa-graduation-cap fa-2x intern"></i><span>Intern</span>
//                 </div>
//             </div>
//         </div>
    
//         <!-- ROSTER STARTS HERE -->
//         <div class="row mgr">${rosterArr.join("")}</div>

//         <script type="text/javascript" src="js/materialize.min.js"></script>
//     </body>
    
//     </html>`
// }
