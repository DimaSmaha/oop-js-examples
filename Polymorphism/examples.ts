import { classTwo } from "./class2";
import { classOne } from "./class1";

let personOne = new classOne("Dima");
let personTwo = new classTwo("Dima");

personOne.showName();
personTwo.showName();

/**
 * We can have the same method name in different classes
 * And they will be called regarding to the class
 * Since class is more important
 */
