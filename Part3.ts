// Part-3:
// Part 3: Colorful T-Shirts
// Challenge:
// 1.Design a type alias named Product to represent a T-shirt object with properties like name (string), price(number), and color(string).
// 2.Include a nested object named inventory within Product. This inventory object should have two properties: -stock(number): Represents the number of T-shirts available. -colorOptions(optional array of strings): Lists available colors (if any).
// 3.Inside the inventory object, define a function named changeColor. This function accepts a new color string as an argument. When called, it should: oUpdate the color property of the Product object.oAdjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).


// Answer:
// Define the Product type alias
type Product = {
    name: string;
    price: number;
    color: string;
    inventory: {
        stock: number;
        colorOptions?: string[];
        changeColor:(newColor: string) => void;
    };
};


// Create a function to generate a product and handle color change
function createProduct(name: string, price: number, color: string, stock: number, colorOptions: string[]): Product {
    const product: Product = {
        name,
        price,
        color,
        inventory: {
            stock,
            colorOptions,
            changeColor(newColor: string) {
                // Update the color of the Product object
                product.color = newColor;
                // Adjust the price based on the new color
                switch (newColor) {
                    case "red":
                    product.price *= 1.10;  // Increase by 10%
                    break;
                    case "blue":
                    product.price *= 0.95;  // Decrease by 5%
                    break;
                    default:
                        product.price = 2000; // Reset to Default price

                  }
            }
        }
    }
    return product;
};

// Example usage:
const tshirt = createProduct("Cool T-Shirt", 2000, "white", 3000, ["white", "red", "blue", "green"]);


// Log initial details
console.log("Initial Product Details:", tshirt);

// Change color and log the updated details
tshirt.inventory.changeColor("red");
console.log("Update Product Details (Red):", tshirt);

tshirt.inventory.changeColor("blue");
console.log("Update Product Details (Blue):", tshirt);