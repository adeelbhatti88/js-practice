//one way to write a function in javascript

let sayHelloWorld = function (name) {

    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
    

}

//sayHelloWorld('Adeel')

let fullNameMaker = function(firstname, lastname) {

    console.log('Welcome to the fullnameMaker Function');
    console.log(`Happy to have you , ${firstname} ${lastname}`);

}

//fullNameMaker('Adeel', 'Bhatti')

let myAdder = function (num1, num2) {

    let sum = num1 + num2
    return sum

}

console.log(myAdder(5,5))