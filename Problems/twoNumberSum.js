
let nums = [1, 2, 3, 4, 5, 11]
let target = 9;

// O(n) = Time complexity
// O(n) = Space complexity

function twoNumberSumUnsorted(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (map[temp] !== undefined) {
            return [map[temp], i]
        }
        else {
            map[nums[i]] = i
        }
    }
}

// If array is already sorted: O(n) - Time complexity, else if we sort it
// it is gonna be O(n log n)
// O(1) = Space complexity

function twoNumberSumSorted(nums, target) {

    for (let i = 0; i < nums.length;) {
        let j = nums.length - 1;

        if (nums[i] + nums[j] > target) {
            j--
        }
        if (nums[i] + nums[j] < target) {
            i++
        }
        if (nums[i] + nums[j] === target) {
            return [nums[i], nums[j]]
        }
    }
}

