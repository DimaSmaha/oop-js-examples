export class classTwo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  showName() {
    console.log(`My name is ${this.name}, called from classTwo`);
  }
}
