

// Write a program to get a user input for a day of the week. Write a program to determine what day of the week it is based on the user's input. Use switch case for this
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
 
 
rl.question("What day of the week is it?", (day) =>{
    switch (day){
        case "Monday":
       console.log("Today is Monday");
       break;
       case "Tuesday":
       console.log("Today is Tuesday");
       break;
       case "Wednesday":
       console.log("Today is Wednesday");
       break;
       case "Thursday":
       console.log("Today is Thursday");
       break;
       case "Friday":
       console.log("Today is Friday");
       break;
       default: 
       console.log("It is a weekend") 
      //rl.close();
    }
}); 

   
 
