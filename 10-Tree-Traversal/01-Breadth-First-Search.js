/**
 * Node class
 * Represents a single node in the Binary Search Tree
 */
class Node {
    constructor(value) {
        this.value = value;   // Value stored in the node
        this.left = null;     // Pointer to left child
        this.right = null;    // Pointer to right child
    }
}

/**
 * Binary Search Tree (BST)
 * 
 * BST Property:
 * - Left subtree contains values LESS than the node
 * - Right subtree contains values GREATER than the node
 */
class BinarySearchTree {
    constructor() {
        this.root = null;     // Root node of the tree
    }

    /**
     * insert(value)
     * Inserts a new value into the BST
     * 
     * Time Complexity:
     * - Average: O(log n)
     * - Worst case (skewed tree): O(n)
     */
    insert(value) {
        let newNode = new Node(value);

        // If the tree is empty, set the new node as root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        // Traverse the tree until the correct position is found
        while (true) {

            // Prevent inserting duplicate values
            if (value === current.value) return undefined;

            // Move to the left subtree
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            }
            // Move to the right subtree
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
     * 
     * Returns the node if found, otherwise undefined
     * 
     * Time Complexity:
     * - Average: O(log n)
     * - Worst case: O(n)
     */
    find(value) {
        if (this.root === null) return undefined;

        let current = this.root;

        // Traverse the tree based on BST property
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

    /**
     * BFS() - Breadth First Search / Level Order Traversal
     * 
     * Visits nodes level by level from left to right
     * Uses a queue data structure
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    BFS() {

        // If tree is empty, return empty array
        if (this.root === null) return [];

        let node = this.root;
        let queue = [];   // Queue to keep track of nodes to visit
        let data = [];    // Array to store traversal order

        // Start with the root node
        queue.push(node);

        // Continue until all nodes are visited
        while (queue.length) {
            node = queue.shift();     // Dequeue the front node
            data.push(node.value);    // Visit the node

            // Enqueue left child if it exists
            if (node.left) queue.push(node.left);

            // Enqueue right child if it exists
            if (node.right) queue.push(node.right);
        }

        return data;
    }
}

// Testing the BST and BFS traversal
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// Output BFS traversal
console.log(tree.BFS()); // [10, 6, 15, 3, 8, 20]