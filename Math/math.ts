//Degrees to Radians Conversion
function degToRad(degrees) {
    return degrees * (Math.PI / 180);
};

//Radians to Degrees Conversion
function radToDeg(rad) {
    return rad / (Math.PI / 180);
};

//Returning a random integer between two bounds
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

console.log(degToRad(90));
console.log(radToDeg(Math.PI));
console.log(random(1, 10));
