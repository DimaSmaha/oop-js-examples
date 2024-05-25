class Address {
  city: string;
  index: number;

  constructor(city: string, index: number) {
    (this.city = city), (this.index = index);
  }

  showAddress() {
    return `My address is ${this.index},${this.city}`;
  }
}

class Person {
  name: string;
  age: number;
  address: Address;

  constructor(name: string, age: number, address: Address) {
    (this.name = name), (this.age = age), (this.address = address); //Aggregation
  }

  showFullInfo() {
    console.log(
      `My name is ${this.name} and my address is ${this.address.showAddress()}`
    );
    console.log(
      `My name is ${this.name} and my address is ${this.address.index}`
    );
  }
}

const address = new Address("Lviv", 80000);
const person = new Person("Dima", 20, address);

console.log(address.showAddress());
person.showFullInfo();
