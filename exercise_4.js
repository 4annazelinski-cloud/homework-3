const num = Number(prompt('input a whole number:').trim())
// let num = 5;
let total = 0;
for (let i = 0; i <= num; i++) {
    total += i;
}
console.log(`The sum of 1 to ${num} is ${total}.`)