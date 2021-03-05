// SINGLETON PATTERN
// only allows 1 instance of a class at a time
// let instance = null;

// CLASS DESIGN PATTERN 
// create a class and define the attributes
class Car {
    constructor(
        doors,
        engine,
        color
    ) {
        // if(!instance){
        //     this.doors = doors;
        //     this.engine = engine;
        //     this.color = color;
        //     instance = this;
        // } else {
        //     return instance;
        // }
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
};

// FACTORY PATTERN
// create function that creates new cars
class CARFactory {
    createCar(type){
        switch(type){
            case "civic":
                return new Car(4, "V6", "blue");
            case "honda":
                return new Car(4, "V8", "red");
        }
    }
};

// initialize the factory
const carFactory = new CARFactory();
const myHonda = carFactory.createCar("honda");

// CONSTRUCTOR PATTERN
// create a sub-class; copy the Car class to create an SUV class
class SUV extends Car {
    constructor(
        doors, 
        engine,
        color
    ) {
        super(doors, engine, color);
        this.wheels = 4;  // creates wheel attributes and sets default to 4
    }
};

// create suvFactory to automate creating SUVs
class SUVFactory {
    createCar(type){
        switch(type){
            case "cx5":
                return new SUV(4, "V6", "lightening blue");
            case "pathfinder":
                return new SUV(4, "V8", "gray");
        }
    }
};

// MIXINS PATTERN
// add the function below after you create a car object
let carMixin = {
    revEngine() {
        console.log(`The ${this.engine} engine is going VROOOM VROOOOOM!`)
    }
};

// initialize the SUV factory
const suvFactory = new SUVFactory();

// ABSTRACT FACTORY
// use multiple factories
const autoManufacturer = (type, model) => {
    switch(type){
        case "car":
            return carFactory.createCar(model);
        case "suv":
            return suvFactory.createCar(model);
    }
};

const civic = new Car(2, "V6", "blue");
const cx5 = new SUV(4, "V8", "red");
const myNewWhip = autoManufacturer("suv", "pathfinder");

console.log('civic', civic);
console.log('cx5', cx5);
console.log('myHonda', myHonda);
console.log('myNewWhip', myNewWhip);

// MIXINS PATTERN continued
// add a function to the car object
Object.assign(Car.prototype, carMixin);
const miasNewCar = autoManufacturer("car", "honda");
miasNewCar.revEngine();
