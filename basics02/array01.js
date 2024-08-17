let myArr = [0,1,2,3,4,5]
console.log(myArr);
//**************Array Functions**************** */
console.log(myArr[1]);
console.log(myArr.includes(9));
myArr.push(8);
myArr.push(54)
myArr.pop()
myArr.unshift(3)//adds element at the begining
myArr.shift()
console.log(myArr);

console.log("A" , myArr.slice(1,3));//it does not effect the original array 
console.log("Original Array" , myArr);
console.log("B" , myArr.splice(1,3));// is changes the main array
console.log("Orignal Array is :" , myArr);





