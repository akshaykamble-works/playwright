// Array 
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// Decleartions let fruits []=[];
//fruits[0]="Apple";
//fruits[1]="Banana";
//fruits[2]="Cherry";
//fruits[3]="Date";
//fruits[4]="Elderberry";
console.log("Fruits:", fruits);
console.log("--------------------");
// Example 1: Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Third fruit:", fruits[2]);
console.log("--------------------");

let employees = ["Alice", "Bob", "Charlie"];
console.log("Employees:", employees);
console.log("--------------------");
 console.log("Leght of Employees array:", employees.length);
 console.log("--------------------");
 console
 for(let i=0; i<employees.length; i++){
    console.log(employees[i]);
 }
 employees.push("David");
 console.log("Employees after adding David:", employees);
 console.log("--------------------");
 let removedEmployee = employees.pop();
 console.log("Removed Employee:", removedEmployee);
 console.log("Employees after removal:", employees);
 console.log("--------------------");
 let uppercaseEmpl=employees.map((emp) => {
    return emp.toUpperCase();
 });
    console.log("Uppercase Employees:", uppercaseEmpl); 
    console.log("--------------------");
    let filteredEmpl=employees.filter((emp) => {
        return emp.startsWith("A");
    });
    console.log("Employees that start with 'A':", filteredEmpl);
    console.log("--------------------");
    let index=employees.indexOf("Charlie");
    console.log("Index of Charlie:", index);
    console.log("--------------------");