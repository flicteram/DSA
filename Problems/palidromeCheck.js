// 1. Iterate through string and save the new string in a variable
// Time complexity: O(n^2) - because you iterate through the string when adding a new value
// Space complexity: O(n) - n is the length on the string

let string = 'abadaba'

function palidromeOne(string) {
    let reverse = ""

    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i]
    }
    return reverse === string
}


// 2. Iterate through string and save the reverse string in an array, then join them together;
// Time complexity: O(n) - because pushing an item to an array takes O(1) time complexity;
// Space complexity: O(n) - n is the length on the string

function palidromeTwo(string) {
    let reverse = []

    for (let i = string.length - 1; i >= 0; i--) {
        reverse = [...reverse, string[i]]
    }
    return reverse.join('') === string
}


// 3. Recursion
// Time complexity: O(n) 
// Space complexity: O(n)

function palidromeRecThree(string, i = 0) {
    let j = string.length - 1 - i

    if (i >= j) {
        return true;
    }
    return string[i] === string[j] && palidromeRecThree(string, i + 1)

}

// 4. Compare first and last chars
// O(n): time complexity
// O(1): space complexity

function palidromeFour(string) {

    for (let i = 0; i < Math.floor(string.length / 2); i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return false
        }

    }
    return true;
}
