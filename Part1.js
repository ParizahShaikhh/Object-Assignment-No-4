"use strict";
// Part-1:
// Part 1: Employee Data
// Challenge:
// 1.Design a type alias named Employee to represent an employee object with properties like name(string), department(string), and role(string).
// 2.Include an optional nested object named contact to hold phone and email information (if provided).
// 3.Employ a union type for the role property to restrict it to "Manager", "Engineer", or "Intern".
// 4.Make the skills property an optional array of strings for listing an employee's skills (if any).
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage:
const employee1 = {
    name: "Parizah Shaikh",
    department: "Engineering",
    role: "Engineer",
    contact: {
        phone: "000-999-88874",
        email: "parivian6@gmail.com"
    },
    skills: ["JavaScript", "TypeScript", "React"]
};
const employee2 = {
    name: "Hunaina",
    department: "Human Resource",
    role: "Manager",
    contact: {
        email: "abcdd@gmail.com"
    },
    skills: ["Leadership", "Communication", "Project Management"]
};
const employee3 = {
    name: "Hadi",
    department: "Marketing",
    role: "Intern",
    contact: {
        email: "abc@gmail.com"
    },
    skills: ["SEO", "Content Creation"]
};
// Log the employee details to the console
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.log("Employee 3:", employee3);
