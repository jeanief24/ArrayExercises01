//Create an array that can hold 4 items name practiceFile.
let practiceFile= [273.15]
practiceFile.push (42);
practiceFile.push("hello")
console.log (practiceFile)
//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.



//Use a SetValue to add the items "false", and "-4.6", and “87” to the array.  Print the array to confirm the changes.
practiceFile.splice (2,0,"false");
practiceFile.splice (0,0,-4.6);
practiceFile.splice (3,0,87);
console.log (practiceFile)