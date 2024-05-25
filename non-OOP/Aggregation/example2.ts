class Car {
  brand: string;
  doors: number;
  price: number;

  constructor(brand: string, doors: number, price: number) {
    this.brand = brand;
    this.doors = doors;
    this.price = price;
  }

  showCar() {
    return `This is a ${this.brand} with ${this.doors} doors. Price: $${this.price}`;
  }
}

class CarDealership {
  name: string;
  location: string;
  carsStock: Array<Car>;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
    this.carsStock = [];
  }

  addCar(car: Car) {
    this.carsStock.push(car);
  }

  introduceDealership() {
    return `Hello in our dealership ${this.name}, located in ${this.location}
            Our current stock is ${JSON.stringify(this.carsStock)}`;
  }

  showAllCars() {
    this.carsStock.forEach((el) => console.log(el.showCar()));
  }
}

const car1 = new Car("Fera", 2, 100_000);
const car2 = new Car("Range", 4, 50_000);
const car3 = new Car("Ope", 4, 5_000);

console.log(car3.showCar());

const dealership = new CarDealership("Luxury", "Minessota");
dealership.addCar(car1);
dealership.addCar(car2);

console.log(dealership.introduceDealership());
console.log(dealership.showAllCars());
