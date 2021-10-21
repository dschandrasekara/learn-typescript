//compile command -  FILENAME=instanceOf-guard FOLDER=TypeGuards npm run compile
//output command -  FILENAME=instanceOf-guard FOLDER=TypeGuards npm run output

/*
The instanceof operator is used to determine whether or not a type is of a particular constructor function.
For example, since an interface can be implemented by several classes, how do we determine which class initializes a particular variable
if it’s declared which an interface type? We can achieve that using the instanceof operator.
 */

interface Person {
    id();
}


class Chef implements Person {
    id() {
        console.log("I am a chef")
    }
    cook(){
        console.log("I love to cook");
    }
}


class Driver implements Person {
    id() {
        console.log("I am a driver")
    }

    drive() {
        console.log("I love to drive");
    }
}


let person: Person;

function init(obj: Person) {
    if(obj instanceof Chef) {
        obj.cook();
    }

    if(obj instanceof Driver) {
        obj.drive();
    }
}
/*
When the obj passed-in is an instance of Chef, we call it’s cook() method and when it’s Driver, we call it’s drive() method.
 */
person = new Chef();
init(person); // I love to cook

person = new Driver();
init(person); // I love to drive
