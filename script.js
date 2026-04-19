//your JS code here. If required.
const student = {
  name: "John",
  age: "21",
  city: "pune"
}

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student.name));