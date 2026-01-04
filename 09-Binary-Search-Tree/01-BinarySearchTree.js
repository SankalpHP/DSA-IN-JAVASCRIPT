/**
 * Binary Search Tree (BST)
 * 
 * Property:
 * - Left child < Parent node
 * - Right child > Parent node
 */

class Node {
    constructor(value) {
        this.value = value;   // Value stored in the node
        this.left = null;     // Pointer to left child
        this.right = null;    // Pointer to right child
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;     // Root node of the tree
    }

    /**
     * insert(value)
     * Inserts a new value into the BST
     * Time Complexity:
     * - Average: O(log n)
     * - Worst (skewed tree): O(n)
     */
    insert(value) {
        let newNode = new Node(value);

        // If tree is empty, set root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {

            // Do not allow duplicate values
            if (value === current.value) return undefined;

            // Go left
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
            // Go right
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }

    /**
     * find(value)
     * Searches for a value in the BST
     * Returns the node if found, otherwise undefined
     * Time Complexity:
     * - Average: O(log n)
     * - Worst: O(n)
     */
    find(value) {
        if (this.root === null) return undefined;

        let current = this.root;

        while (current) {
            if (value < current.value) {
                current = current.left;
            } 
            else if (value > current.value) {
                current = current.right;
            } 
            else {
                // Value found
                return current;
            }
        }

        // Value not found
        return undefined;
    }
}

// Testing the BST
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);

console.log(tree.find(88)); // undefined