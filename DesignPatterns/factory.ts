/**
 * Factory Pattern is one of the creational Design Pattern.
 * In the Factory pattern, we create an object without exposing the creation logic to the client.
 * The factory design pattern is used when we have a superclass with multiple sub-classes 
 * and based on input, we need to return one of the sub-class.
 * This pattern takes out the responsibility of the instantiation of a class from the client program to the factory class.
 */

// Example

// Interface for the factory created instance object.
export interface Product {
    method(param?: any): void;
}

// Internal
export class ConcreteProductA implements Product {
    method = (param?: any) => {
        return "Method of ConcreteProductA";
    }
}

// Internal
export class ConcreteProductB implements Product {
    method = (param?: any) => {
        return "Method of ConcreteProductB";
    }
}

// Creational factory classs. Exposed to outside.
export class ProductFactory {
    public static createProduct(type: string): Product {
        if (type === "A") {
            return new ConcreteProductA();
        } else if (type === "B") {
            return new ConcreteProductB();
        }

        return null;
    }
}

// Usage

export function show(): void {
    var a: Product = ProductFactory.createProduct("A");
    var b: Product = ProductFactory.createProduct("B");

    // If you see in the above lines, outside we do not know how the product is created internally.

    console.log(a.method());
    console.log(b.method());
};

show();
