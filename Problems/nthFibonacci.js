// Find nth fibonacci number
// Fibonacci numbers are a sequence of whole numbers arranged as 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
// Every number is the sum of the preceding two.

function nthFibOne(num) {

    let prevs = [0, 1];
    console.log('plm')

    for (let i = 0; i < num - 2; i++) {

        let next = prevs[0] + prevs[1]
        prevs[0] = prevs[1];
        prevs[1] = next;
    }

    return prevs[1]
}


console.log(nthFibOne(6))