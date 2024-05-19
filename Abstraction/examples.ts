// import { ParentClass } from "./class1";
import { ChildClass } from "./class2";

let person = new ChildClass("Dima", 20);

person.showAge();
person.showName();

// let person2 = new ParentClass('Dima')

/**
 * We can not do it like this, since the parentClass is abstract,
 * and can be used only for the inheritance
 * It can not be accessed directly
 */
