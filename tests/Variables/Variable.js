let x = 10;
let y = 30;
let z = x + y;
console.log(z);

function testLet(a, b) {
    if (a < b) {
        let A = (a + b);
        console.log(A);
    } else {
        let B = (a - b);
        console.log(B);
    }
}

testLet(20, 40);