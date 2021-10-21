//compile command -  FILENAME=instanceOf FOLDER=TypeGuards npm run compile
//output command -  FILENAME=instanceOf FOLDER=TypeGuards npm run output
var Chef = /** @class */ (function () {
    function Chef() {
    }
    Chef.prototype.id = function () {
        console.log("I am a chef");
    };
    Chef.prototype.cook = function () {
        console.log("I love to cook");
    };
    return Chef;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.prototype.id = function () {
        console.log("I am a driver");
    };
    Driver.prototype.drive = function () {
        console.log("I love to drive");
    };
    return Driver;
}());
var person;
function init(obj) {
    if (obj instanceof Chef) {
        obj.cook();
    }
    if (obj instanceof Driver) {
        obj.drive();
    }
}
person = new Chef();
init(person); // I love to cook
person = new Driver();
init(person); // I love to drive
