const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solution(numbers, sum) {
    // Will store the complement of the numbers in the array,
    // which are the numbers needed to get to the sum.
    let complements = new Set();
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const complement = sum - number;
        if (complements.has(number)) {
            result.push([number, complement]);
        } else {
            complements.add(complement);
        }
    }
    return result;
}

function question() {
    rl.question("Input a comma separated list of integers:\n", function(list) {
        rl.question("Input the target integer:\n", function(sum) {
            const numbers = list.split(',').map((num) => parseInt(num, 10));
            const results = solution(numbers, sum);
            results.forEach((res) => {
                console.log(`${res[0]}, ${res[1]}`);
            });
            question();
        });
    });
}

question();

rl.on("close", function() {
    process.exit(0);
});

module.exports = {
    solution
}