//  function add (num1 , num2) {
//      return num1 + num2
//  } 
//  const total = add(52,23);
//  console.log(total);

// default parameter 

// function add(num1, num2) {
//     if(num2 === undefined) {
//         num2 = 5
//     }
//     return num1  + num2 ;
// }

// const totalSum = add(10);
// console.log(totalSum);

// ES6 Default Parameter 

function add(num1 , num2 = 20){
    return num1 + num2
};
const sum = add(10);
console.log(sum);