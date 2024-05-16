// question 1
let word = 'Hi there'
console.log(typeof word);

// question 2
word = 8
console.log(typeof word);

//question 3
// boolean 
let checkValue = true
console.log( typeof checkValue)

//undefined
let undefinedValue;
console.log(typeof undefinedValue);

//null
let thisValue = 7
thisValue > 10 ? console.log(`${thisValue} is greater than 10`) : null

//object
let person = {
    firstName: "Robyn",
    lastName: "Carnow"
}
console.log(typeof person)

//array
let fruits = ['banana', 'pear', 'orange']
Array.isArray(fruits) ? console.log('This value is an array') : console.log('This variable is not an array')

//function
let thisFunction = () => {console.log('this is a function')}
thisFunction()
console.log(typeof thisFunction)