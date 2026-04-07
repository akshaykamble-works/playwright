function info() {
    let name = "Akshay";
    let age = 25;
    let isTester = true;
    console.log(name, age, isTester);
}
info();

function details(){
    let firstname="Ashwini";
    let lastname="Kamble";
    let age=30;
let contact=9922591721;
    console.log(firstname,lastname,age,contact);
}
details();

// Scope of block
function varScope()
{
    let company="Capgemini india";
    console.log(company);
}
varScope();
//console.log(company);// company variable unable to access due to scope is limited