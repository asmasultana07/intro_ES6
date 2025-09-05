// #template string use kre auto space create hy 

function sum(num1, num2){
    const result = num1+ num2;
    //const output = 'sum of '+ num1 + ' and '+num2+ ' is equal to '+result;
    const output =`sum of ${num1} and ${num2} is equal to ${result}` ;
    console.log(output)
}
sum(7,20)

//
const price =100;
const discountPrice = `Discounted Price is after 20% discount ${price * 0.8}`
console.log(discountPrice);