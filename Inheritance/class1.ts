export class ParentClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  showName() {
    console.log(`My name is ${this.name}`);
  }
}
