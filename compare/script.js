let obj1 = {name : "person1", age : 5};
let obj2 = {age : 5, name : "person1"};
const sortedJsonStr1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const sortedJsonStr2 = JSON.stringify(obj2, Object.keys(obj2).sort());


if (sortedJsonStr1 === sortedJsonStr2) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}