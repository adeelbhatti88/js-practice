let iAmGlobal = 'someValue'

if (true) {
    let iAmLocal = 'iAmLocal' //this let variable is only accessibler inside this if statement.
    iAmGlobal = 'superman' //we are changing the value of the iAmGlobal variable so it is changed everywhere
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

// console.log(iAmLocal); //this will not work because iAmLocal is out of scope and is defined only in the if statement above.
console.log(iAmGlobal);
//the tldr is you should only use var if you want somethign to have a global scope, but most of the time let will suffice.