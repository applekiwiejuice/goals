exports.getDate = function() {
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const today = new Date();
const day = today.toLocaleTimeString("en-US",options);
return day;
}

exports.getDay = function() {
const options = {weekday: 'long'};
const today = new Date();
const day = today.toLocaleDateString("en-US",options);
return day;
}

console.log(module.exports);

// switch (day) {
// case 0:
//   day = "Sunday";
//   break;
// case 1:
//   day = "Monday";
//   break;
// case 2:
//    day = "Tuesday";
//   break;
// case 3:
//   day = "Wednesday";
//   break;
// case 4:
//   day = "Thursday";
//   break;
// case 5:
//   day = "Friday";
//   break;
// case 6:
//   day = "Saturday";
//   default:
//   console.log("default");
// }
