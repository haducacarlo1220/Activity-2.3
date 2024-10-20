let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Combined Array:", combinedArr);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits);

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);

fruits.pop();
console.log("Fruits after pop:", fruits);

let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift:", array2);

fruits.sort();
console.log("Fruits after sort:", fruits);

let slicedFruits = fruits.slice(1, 3); 
console.log("Sliced Fruits:", slicedFruits);

let months = ["January", "February", "March", "April"];
months.splice(2, 1, "March", "NewMonth"); 
console.log("Months after splice:", months);