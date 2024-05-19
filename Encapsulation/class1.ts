export class ParentClass {
  private name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected showName() {
    console.log(`My name is ${this.name}`);
  }

  showAge() {
    console.log(`My name is ${this.age}`);
  }

  showFullInfo() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}
