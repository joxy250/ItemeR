const currentDate = new Date();

const date = currentDate.toLocaleDateString();
const time = currentDate.toLocaleTimeString();

console.log("Date: " + date);
console.log("Time: " + time);
