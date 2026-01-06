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

    /**
     * DFS() - Depth First Search (Postorder Traversal)
     *
     * Traversal Order:
     * 1. Traverse the left subtree
     * 2. Traverse the right subtree
     * 3. Visit the current node
     *
     * Time Complexity: O(n)
     * Space Complexity:
     * - O(n) in worst case (recursion stack for skewed tree)
     */
    DFS(){

        // If the tree is empty, return an empty array
        if(this.root === null) return [];

        let current = this.root; // Start traversal from the root
        let data = [];           // Array to store postorder traversal result

        /**
         * Recursive helper function for postorder traversal
         * @param {Node} node - current node being visited
         */
        function traversal(node){

            // Recursively traverse left subtree
            if(node.left) traversal(node.left);

            // Recursively traverse right subtree
            if(node.right) traversal(node.right);

            // Visit the node AFTER its children (Postorder step)
            data.push(node.value);
        }

        // Start DFS traversal from the root node
        traversal(current);

        return data; // Return the postorder traversal result
    }

}

// Testing the BST and DFS traversal (Postorder Traversal)
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// Output DFS traversal (Postorder Traversal)
console.log(tree.DFS()); // [ 3, 8, 6, 20, 15, 10 ]


