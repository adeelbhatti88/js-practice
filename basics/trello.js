const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0]);


//below we are putting a function inside a forEach loop, this function will execute based on how many elements you have in the array.
days.forEach(function (day, index) {

    console.log(`starts with ${index + 1}  -- ${day}`);
    
})

