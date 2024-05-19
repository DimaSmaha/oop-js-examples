import { ParentClass } from "./class1";

export class ChildClass extends ParentClass {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  showAge() {
    console.log(`My age is ${this.age}`);
  }
}
