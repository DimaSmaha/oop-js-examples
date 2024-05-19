import { ParentClass } from "./class1";

export class ChildClass extends ParentClass {
  job: string;

  constructor(name: string, age: number, job: string) {
    super(name, age);
    this.job = job;
  }

  showJob() {
    console.log(`My job is ${this.job}`);
  }

  showName() {
    console.log("showing name");
    super.showName(); //can access to this since its protected. We can access via class or ancestors for the protected
    // super.name  //can not access it here since its available only for the original class itself
  }
}
