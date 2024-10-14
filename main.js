/* START CODE UNDER THIS LINE */
const object = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

for (const number in object) {
  console.log(number);
}
for (const number in object) {
  console.log(object[number]);
}
console.clear();

const keyValuePairs = function (object) {
  for (let x in object) {
    console.log([object, object[x]]);
  }
};

console.log(keyValuePairs({ name: "John", age: 24 })); // => [["name", "John"], ["age", 24]]
keyValuePairs({ firstName: "John", lastName: "Doe" }); // => [["firstName", "John"], ["lastName", "Doe"]]
keyValuePairs({
  name: "Mark",
  position: "Full-Stack Developer",
  salary: 600,
}); // => [["name", "Mark"], ["position", "Full-Stack Developer"], ["salary", 600]]

//

const absoluteNumbers = function (grades) {
  for (const number in grades) {
    if (grades[number] < 0) {
      grades[number] = grades[number] * -1;
    }
  }
  return grades;
};

//

const passedOrFailed = function (studentGrades) {
  for (const status in studentGrades) {
    if (studentGrades[status]["grade"] > studentGrades[status]["total"] * 0.5) {
      return "Passed";
    }
    return "failed";
  }
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

console.log(passedOrFailed(studentOne)); // =>  "The student have passed"
console.log(passedOrFailed(studentTwo)); // =>  "The student have failed"
//

//
const convertToArray = function (object) {
  const array1 = [];
  for (const x in object) {
    array1[x] = object[x];
  }
  return array1;
};

console.log(convertToArray({ 0: "one", 1: "two", 2: "three" })); // => ["one", "two", "three"]
convertToArray({ 0: "two", 1: "three", 2: "one" }); // => ["two", "three", "one"]
convertToArray({ 0: "three", 1: "two", 2: "one" }); // => ["three", "two", "one"]

//

const poisonousCompounds = {
  daphnetoxin: true,
  mercury: true,
  cyanide: true,
};

const safeToConsume = function (object) {
  for (const compound in object) {
    if ((object[compound] = poisonousCompounds[compound])) {
      return " don't consume";
    }
  }
  return " consume ";
};

console.log(safeToConsume({ h2o: "10.0g" })); // => "Safe to consume"
safeToConsume({ pyridoxine: "0.4mg", choline: "9.8mg", vitaminC: "8.7mg" }); // => "Safe to consume"
safeToConsume({
  genkwanin: "3.1mg",
  mezerein: "2.7mg",
  daphnetoxin: "7.3mg",
}); // => "Poisonous do not consume"
console.log(
  safeToConsume({ h2o: "5.2mg", glucose: "1.3mg", cyanide: "4.0mg" })
); // => "Poisonous do not consume"
console.clear()

//Q6

;


const toString = function (object) {
    let newstring = []
  for (const word in object) {
    newstring.push(object[word]);
  }
  return newstring.join(',');
};

console.log(toString({ name: "John", age: 24 })); // => "John, 24"
toString({ firstName: "John", lastName: "Doe" }); // => "John, Doe"
toString({ name: "Mark", position: "Full-Stack Developer", salary: 600 }); // => "Mark, Full-Stack Developer, 600"
