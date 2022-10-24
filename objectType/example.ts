//standard use of objects in ts


var festivals:{name:string, month:string, favourite:boolean} = {
    name:"Diwali",
    month:"October",
    favourite:true
}



//creating objects as an interface

interface touristSpots{
    name:string,
    city:string,
    rating?:number  //? means optional
}

var tsp1:touristSpots;
var tsp2:touristSpots;

tsp1 = {name:"tajmahal",city:"agra",rating:9}
tsp2= {name:"victoria memorial",city:"kolkata"} //rating is optional, hence not throwing any error



