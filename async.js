// console.log("Task 01");
// setTimeout(()=>{
//     console.log("task 03")
// }, 1000);

// console.log("Task 3");

// function printhello() {
//     return "Hello World";
// }

// var printdata = printhello();
// console.log(printdata);

// var listkind = ["Men", "Women", "Child"];
// var newKindList = listkind.map(function(data){
//     return data+ " kind";
// })
// console.log(newKindList);

// var kindlist = ["Men", "Women", "Child"];

// var newkindlist = kindlist.map((data) => {
//   return data+ " kind";
// })

// console.log(newkindlist);

//========== Callback funtion====

// function welcome(name) {
//   console.log("Welcome "+name+" into PIAIC IoT Q4 Classes");
// }
// function intro(firstname,lastname,callback) {
//   var fullname = firstname +" "+ lastname;
//   callback(fullname)
// }

// intro("Aqib", "Khan", welcome);

//===========promise======== 
// var assignment = 0;
// var result = new Promise ((res,rej)=>{
//   if(assignment){
//     res("It is resolved")
//   }
//   else {
//     rej("It is rejected")
//   }
// }) 

// var myresult = function() {
//   result
//     .then(function(data) {
//       console.log("completed")
//       console.log(data)
//     })
//     .catch(function(error){
//       console.log("not completed")
//       console.log(error.message)
//     })

// }

// myresult();

try {
  var x = "My name is Khan";
  console.log(x);
} catch (e) {
  console.log(e.message);
  
}