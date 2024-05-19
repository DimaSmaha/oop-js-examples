import { ParentClass } from "./class1";
import { ChildClass } from "./class2";

let person = new ChildClass("Dima", 20, "AQA");

person.showAge();
person.showName();
person.showFullInfo();

person.showJob();

/**
 * Encapsulation allows as to set up the visibility of properties and methods
 * within classes, we can manipulate with data inside of the classes
 * and set up what will be visible by ancestors or not
 */
