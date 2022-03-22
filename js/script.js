// window.addEventListener("load", function () {
//     "use strict";

//     function display(e) {
//         console.log("ID: " + e.target.innerHTML);
//         console.log("Name: " + e.target.innerHTML);
//         console.log("Extension: " + e.target.innerHTML);
//         console.log("Email: " + e.target.innerHTML);
//         console.log("Department: " + e.target.innerHTML);
//     }
//     var empForm = document.getElementById("empForm");
//     empForm.addEventListener("click", display, false);
// });

// =========================================================================
// =========================================================================


// var empForm = document.getElementById("empForm");

// window.addEventListener("load", function () {
//         "use strict";
//         // empForm.preventDefault();
//         empForm.addEventListener("submit", e => {
//             console.log("ID: " + e.target.innerText);
//             console.log("Name: " + e.target.innerText);
//             console.log("Extension: " + e.target.innerText);
//             console.log("Email: " + e.target.innerText);
//             console.log("Department: " + e.target.innerText);
//         })    
//     })



// =========================================================================
// =========================================================================


// window.addEventListener("load", function () {
//     "use strict";

//     var empForm = document.getElementById("empForm");
//     // empForm.preventDefault();
//     empForm.addEventListener("click", e => {
//         console.log("ID: " + e.target.innerHTML);
//         console.log("Name: " + e.target.innerHTML);
//         console.log("Extension: " + e.target.innerHTML);
//         console.log("Email: " + e.target.innerHTML);
//         console.log("Department: " + e.target.innerHTML);
//     }, false);
// });





// var employeeId = document.getElementById('employeeId');

// window.addEventListener("load", function () {
//         "use strict";
// employeeId.addEventListener('click', e => {
//     console.log(e.target.innerText)
// });
// })




// var empForm = document.getElementById("empForm");

// window.addEventListener("load", init, false);
// function init() {
//         "use strict";
//         // empForm.preventDefault();
//         empForm.addEventListener("click", (e) => {
//             console.log("ID: " + e.target.innerHTML);
//             console.log("Name: " + e.target.innerHTML);
//             console.log("Extension: " + e.target.innerHTML);
//             console.log("Email: " + e.target.innerHTML);
//             console.log("Department: " + e.target.innerHTML);
//         }, false);    
//     }




// const empForm = document.getElementById('empForm');

// empForm.addEventListener('click', (event) => {}
//     console.log(event)
// })
    





// var employeeId = document.getElementById("employeeId");

// employeeId.addEventListener('click', display);
// function display () {
//     console.log(employeeId.innerHTML);
// }
    





// var empForm = document.querySelector(".empForm");
// var button = empForm.querySelector(".submit");
// button.addEventListener("click", (event) => {
//             console.log(event);
//         })    
  




// function display(event) {
//     console.log = ("ID: " + employeeId.value)
//     console.log = ("Name: " + fullName.value)
//     console.log = ("Extension: " + extension.value)
//     console.log = ("email: " + email.value)
//     console.log = ("department: " + department.value)
//     event.preventDefault();
// }
// const empForm = document.getElementById('empForm')
// const employeeId = document.getElementById('employeeId')
// const fullName = document.getElementById('fullName')
// const extension = document.getElementById('extension')
// const email = document.getElementById('email')
// const department = document.getElementById('department')
// empForm.addEventListener('submit', display)



// =========================================================================
// =========================================================================

// THIS IS THE CODE FOR THIS WEEK ASSIGNMENT

// =========================================================================
// =========================================================================


let empForm; employeeId; fullName; extension; email; department;

const $ = (id) => document.getElementById(id);

empForm = $('empForm');
employeeId = $('employeeId');
fullName = $('fullName');
extension = $('extension');
email = $('email');
department = $('department');

window.addEventListener('load', init, false);

function init() {
    "use strict";
    empForm.addEventListener('submit', (event) => {
        event.preventDefault();
        employeeId = employeeId.value;
        fullName = fullName.value;
        extension = extension.value;
        email = email.value;
        department = department.value;
        
        console.log(`ID: ${employeeId}.\nName: ${fullName}.\nExtension: ${extension}.\nEmail: ${email}.\nDepartment: ${department}.`)
        })
}
