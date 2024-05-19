import { ChildClass } from "./class2";

let person = new ChildClass("Dima", 20);

person.showAge();
person.showName();

/**
 * Since we inherit the parentClass via childClass, we are able
 * to get the methods of the parentClass using childClass *
 */
