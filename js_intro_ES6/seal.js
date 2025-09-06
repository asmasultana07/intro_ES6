// seal ->object ke modify krte dibe but delete korte dibe na
// freze -> modify , dekete krte dibe na

// object
const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age:22
}

Object.seal(employee)
delete employee.experience
// delete employee.salary

employee.salary = employee.salary +5000;
employee.location ='Dhaka'
console.log(employee)