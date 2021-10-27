/**
 * The Target defines the domain-specific interface used by the agent.
 */
class Target {
    public request(): string {
        return 'Target: The default behavior of the target domain.';
    }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible with the existing agent.
 * So, the Adaptee needs some adaptation before the agent uses it.
 */
class Adaptee {
    public specificRequest(): string {
        return 'Adaptee incompatible behaviour';
    }
}

/**
 * The Adapter makes the Adaptee's incompatible interface compatible with the Target's interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().replace('incompatible', 'compatible');
        return `Adapter: (CORRECTED DATA) ${result}`;
    }
}

/**
 * The agent supports all classes that follow the Target interface.
 */
function agent(target: Target) {
    console.log(target.request());
}

console.log('Agent: OK with the Target:');
const target = new Target();
agent(target);
console.log('');
const adaptee = new Adaptee();
console.log('Agent: NOT OK with Adaptee:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');
console.log('Agent: OK with the Adapter:');
const adapter = new Adapter(adaptee);
agent(adapter);
