
let nums = [1, 4, 2, 5, 3]


function sumOfOddLengthSubArray(nums) {

    let sum = nums.reduce((acc, val) => acc + val, 0);

    console.log(sum)

    if (!nums.length) {
        return sum;
    }
    else {
        return sum += sumOfOddLengthSubArray(nums.slice(0, nums.length - 2))
    }
}


console.log(
    sumOfOddLengthSubArray(nums)

)

