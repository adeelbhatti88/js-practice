// //datatype - Array



// const superHeroes = ['Batman', 'Superman', 'Batgirl', 'Aquaman']

// console.log(superHeroes);
// console.log(superHeroes[superHeroes.length - 1]);

// console.log(`We have ${superHeroes.length} super heroes`);

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'Something'

// console.log(numbers);

//start

// numbers.shift() //removes first element in an array and returns it.
// console.log(numbers.shift());

// numbers.unshift('SOMETHING')
// console.log(numbers);

//middle

// numbers.splice(2, 1, 'Something') //splice with modify starting at position 2, we want to delete one elmeent, and we want to replace that eleemnt with 'Something'
// console.log(numbers);

numbers.splice(2, 2, 'Something') //splice with modify starting at position 2, we want to delete 2 elmeent, and we want to replace the position 2 element with 'Something'
console.log(numbers);

//end
// numbers.pop() //you can use log with this to print the value that is to be deleted
// console.log('number to be deleted:    ', numbers.pop());
// console.log(numbers);

// numbers.push('Seven') //push appends to the end of the array
// console.log(numbers);
