interface Animal {
    height:number,
    weight:number,
    color:string,
    gender:string,
    species:string
}

const animal1:Animal = {
    height: 4,
    weight: 500,
    color: "Black",
    gender: "Male",
    species: "Ursus americanus"
}

const animals:Animal[] = [];

animals.push(animal1);

const animal2:Animal = {
    height: 1,
    weight: 3,
    color: "Orange",
    gender: "Female",
    species: "Cricetus cricetus"
}

class Car {
    private model:string;
    private make: string;
    private vin: string;
    //private int price;
    constructor(model:string, make:string, vin:string) {
        this.model = model;
        this.make = make;
        this.vin = vin;
    }

    getModel =()=> {
        return this.model;
    }

    getMake = () => {
        return this.make;
    }

    getVin = () => {
        return this.vin;
    }

    setModel = (model:string) => {
        this.model = model;
    }

    setMake = (make:string) => {
        this.make = make;
    }

    setVin = (vin:string) => {
        this.vin = vin;
    }
}

animals.push(animal2)
console.table(animals);

const car:Car = new Car("F-150", "Ford", "vhory31gwoe8g23o029hre23");

console.table(car);