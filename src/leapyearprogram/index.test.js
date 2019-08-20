//use this line to import the function, made possible by
//the export default line in the other file
import leapYear from "./index";

//invoked by Jest (takes 2 parameters, String & test)
it("should NOT be a leap year if divisible by 100, not 400", () => {
  //this is the test function
  const input = 1984;
  const expectedOutput = true;
  //expect(leapYear(input)).toBe(expectedOutput);
  const actualOutput = leapYear(input); //another way of writing it
  expect(actualOutput).toBe(expectedOutput);
});

//skip the const declarations and test 5 defined cases
//const leapYear = require("./index"); //WHAT DOES THIS DO? IT BROKE BY CODE??

it("should NOT be a leap year if divisible by 100, not 400", () => {
  expect(leapYear(1900)).toBe(false);
});

it("should be a leap year if divisible by 4, not 100", () => {
  expect(leapYear(1984)).toBe(true);
});

it("should NOT be a leap year if not divisible by 4", () => {
  expect(leapYear(1983)).toBe(false);
});

it("should be a leap year if divisible by 400", () => {
  expect(leapYear(2000)).toBe(true);
});

it("should throw an error for years before 1582", () => {
  expect(() => {
    leapYear(1568);
  }).toThrow(); //different Jest expect matcher
});
