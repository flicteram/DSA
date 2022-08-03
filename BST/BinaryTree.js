class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.position = 0;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            newNode.position++
            if (temp.value > value) {
                if (!temp.left) {
                    temp.left = newNode
                    return this
                }
                else {
                    temp = temp.left
                }
            }
            else if (temp.value < value) {
                if (!temp.right) {
                    temp.right = newNode
                    return this
                }
                else {
                    temp = temp.right
                }
            }
        }
    }
    getNode(value) {
        let temp = this.root
        while (true) {
            if (temp.value === value) {
                return temp.position
            }
            if (temp.value > value) {
                temp = temp.left
                if (temp === null) {
                    return -1
                }
            }
            if (temp.value < value) {
                temp = temp.right
                if (temp === null) {
                    return -1
                }
            }
        }
    }
}

let nums = [-1, 0, 3, 5, 9, 12]

const bts = new BinaryTree();

for (let i = 0; i < nums.length; i++) {
    bts.insert(nums[i])
}

console.log(
    bts.getNode(9)
)

// console.log(bts)