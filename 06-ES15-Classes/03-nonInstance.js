/**
 * ES2015 CLASS SYNTAX
 */
class Student {

    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }

    // 🔹 STATIC METHOD
    // This method belongs to the CLASS itself, not to the instances.
    static greeting() {
        return `Have a nice day :-)`;
    }
}

/**
 * IMPORTANT NOTES ABOUT static METHODS:
 *
 * 1️⃣ The 'static' keyword makes a method belong to the CLASS, not to instances.
 *
 *    That means:
 *      - You CANNOT call greeting() on an object like:
 *        ❌ firstStudent.greeting()
 *      
 *      - You MUST call it on the class itself:
 *        ✅ Student.greeting()
 *
 * 2️⃣ Static methods are used for:
 *      ✔ Utility/helper functions
 *      ✔ Methods that don't depend on instance data
 *      ✔ General-purpose operations
 *
 * 3️⃣ Instance methods (WITHOUT static) use 'this' and depend on each object's data.
 *    Static methods do NOT use 'this' and do NOT access instance properties.
 */

let firstStudent = new Student("Sankalp", "Selokar", 3);
let secondStudent = new Student("Colt", "Wallet", 4);

console.log(firstStudent);
console.log(secondStudent);

// Calling the static method directly on the class
console.log(Student.greeting());
