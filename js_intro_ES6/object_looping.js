const numbers = [1,2,54,1,4,9]
for (const num of numbers){
    // console.log(num)
}

const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 200000,
    experience: 2,
    age: 25
}
for (const key in employee){
    const value = employee[key]
    console.log(key,value)
}