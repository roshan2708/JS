console.log("This is date time java scriipt functions");
let mydate = new Date()
console.log(mydate.toDateString());
console.log(mydate.getMilliseconds());
console.log(mydate.getFullYear());
console.log(mydate.getHours());
console.log(mydate.toLocaleDateString());
console.log(mydate.getDay());
console.log(mydate.getMonth());
let mytimestamp = Date.now()
console.log(mytimestamp.toPrecision(2))
console.log(Math.floor(mytimestamp));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);
if(newDate.getMonth()==7){      //some internal mood
    console.log("August");
    
}






