let king = 'John'
//you should never declare a variable wihtout the let or var keywords, it is very dangerious, don't do it, it will make it a global variable by default

if(true) {
    let king = 'Sam'

    if (true) {
        // let king = 'Adeel'
        console.log(king); //when you print this, its going to first look for king variable in its own scope,
        //if it doesn't find it, it moves one level up. so if we commet out king adeel, the king will be sam
    }
}

if (true) {
    console.log(king);
}