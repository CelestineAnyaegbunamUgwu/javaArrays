//Empty Array
let myarr=[];

//Array with more than 5 element
let array5 = new Array(6);


//get lenght
let arr = [1,2,2,4];
let aa = arr.length;

//Get the first item, the middle item and the last item of the array
arr[0];//gets the first
let a = arr[arr.length-1];// gets the last element
console.log(aa);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array
console.log(itCompanies); 

// Print the number of companies in the array
console.log("Number of companies in the array is:", itCompanies.length);

// Print the first company
console.log("First company:", itCompanies[0]);

// Print the middle company 
const middleIndex = Math.floor(itCompanies.length / 2); 
console.log("Middle company:", itCompanies[middleIndex]); 

// Print the last company
console.log("Last company:", itCompanies[itCompanies.length - 1]); 

// Print out each company in the array
console.log("List of companies:");
for (const company of itCompanies) {
  console.log(company);
}