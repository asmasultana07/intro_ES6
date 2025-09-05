// const product= { name: 'shirt', price: '500', quantity: 7}

// const price = product.price;
// const discount = price*20 /100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;
// console.log(totalAmount); //435

// object & array destructing write
// object - if want sortly write
// ----------------------------------------------------------//
// const (property) = {.....} 
// const {price,quantity} = { name: 'shirt', price: '500', quantity: 7}
// console.log(price,quantity)

const {price,quantity, tax= 2} = { name: 'shirt', price: '500', quantity: 7}
console.log(price,quantity, tax) // 500, 7, 2

//-------------------------------------------------------------------//
// array - if want sortly write
const numbers = [25,88, 89 ,101];
const [ first, second] = numbers;
const [math, physics] = [90, 99];
console.log(physics)