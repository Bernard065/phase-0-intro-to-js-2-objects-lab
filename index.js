// Write your solution in this file!

//const employee = {
    //name: 'Sam',
    //streetAddress: '11 Broadway'
//}
//function updateEmployeeWithKeyAndValue(employee, key, value) {
    //employee[key] = value;
    //return employee;
//}
//function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  //  employee[key] = value;
    //return employee;
//}
 
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};
    newObject[key] = value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};
    delete newObject.name;
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
   