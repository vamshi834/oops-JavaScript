console.clear()

// //objects
// var personInfo = {
//   firstName : "Vamshi",
//   lastName : "Medipally",
//   age : 23 ,
//   gender: 'male',
//   admissionNumber: 1234,
//   getFirstName: function() {
//     return this.firstName
//   },
//   getLastName: function() {
//     return this.lastName
//   },
//   getAge: function() {
//     return this.age
//   },
//   getGender: function() {
//     return this.gender
//   },
  
  
// }
// console.log(personInfo.getGender())
// //
function personInfo(pFirstName,pLastName,pAge,pGender,pAdmission) {
  this.FirstName = pFirstName
  this.LastName = pLastName
  this.Age = pAge
  this.Gender = pGender
  this.Admission = pAdmission
}

var sachin = new personInfo("Sachin", "Kumar",23,"male",4569)
var ravi = new personInfo("Ravi","Teja",22,"male",7849)
var dhanush = new personInfo("dhanush","kamarthi",23,"male",1596)

console.log(ravi)

