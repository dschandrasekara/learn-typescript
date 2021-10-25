// Abstract Factory is a creational design pattern, which solves the problem of creating
// entire product families without specifying their concrete classes.

/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products.
 */
interface AbstractFactory {
    createProductA(): AbstractProductA;

    createProductB(): AbstractProductB;
}

/**
 * Concrete produce a family of products that belong to a single
 * variant.
 */
class FactoryA implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

/**
 * Each Factory has a corresponding product variant.
 */
class FactoryB implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface AbstractProductA {
    productFunctionA(): string;
}

/**
 * These Concrete Products are created by corresponding Factories.
 */
class ConcreteProductA1 implements AbstractProductA {
    public productFunctionA(): string {
        return 'Result: product A1.';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public productFunctionA(): string {
        return 'Result: product A2.';
    }
}

/**
 * Here's the the base interface of another product. All products can interact
 * with each other, but proper interaction is possible only between products of
 * the same concrete variant.
 */
interface AbstractProductB {
    /**
     * Product B is able to do its own thing
     */
    productFunctionB(): string;

    /**
     * Product B is able to do its own thing but it also can collaborate with the ProductA.
     */
    productFunctionB2(collaborator: AbstractProductA): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteProductB1 implements AbstractProductB {

    public productFunctionB(): string {
        return 'Result: product B1.';
    }

    /**
     * The variant, Product B1, is only able to work correctly with the variant, Product A1.
     */
    public productFunctionB2(collaborator: AbstractProductA): string {
        const result = collaborator.productFunctionA();
        return `Result:  B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {

    public productFunctionB(): string {
        return 'Result: product B2.';
    }

    /**
     * The variant, Product B2, is only able to work correctly with the variant, Product A2.
     */
    public productFunctionB2(collaborator: AbstractProductA): string {
        const result = collaborator.productFunctionA();
        return `Result: B2 collaborating with the (${result})`;
    }
}

/**
 * The agent works with factories and products only through abstract types: AbstractFactory and AbstractProduct.
 */
function agent(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.productFunctionB());
    console.log(productB.productFunctionB2(productA));
}

console.log('** Agent: Testing agent with the first factory type');
agent(new FactoryA());
console.log('');
console.log('** Agent: Testing the same agent with the second factory type');
agent(new FactoryB());
