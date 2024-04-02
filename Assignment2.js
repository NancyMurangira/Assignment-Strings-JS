// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
let  arr2 = [true,"green","where",12,56];
let result1=arr1.pop();
let result2=arr2.pop();
console.log(result);
console.log(result);

// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];

stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let joinarr = stringmyPets.join();
console.log(joinarr);

// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

itemsvaarr3 =[-5,9,5,3,2,-3,6,8,4,1];
let sortarr = itemsvaarr3.sort();
console.log(sortarr);

// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates

let arra = [["boy", "man", "girl","school", "girl", "woman"]];
let removeDuplica = [];
let duplica = [];
arra.forEach(f =>{
    if (removeDuplica.includes(f)){ 
        removeDuplica.push(f); 
    }
    else(duplica.push(f));
});
console.log({removeDuplica});
console.log({duplica});

// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x", 4];
let word = "way";
let textIndex = arr5.indexOf(word);
if (word== arr5["way"]){
    console.log({word})
}
else{
    console.log("The search was not found ")
}

// Write a JS script to sort the following string:let word = "renniw"

let str= "renniw";
function newSort (word) {
    return word.split("")
            .sort()
            .join("");
}
console.log(newSort(str));

// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 

let fruits=["Apple","Orange","Banana","Mango","Pear","Tomato","Grape","Strawberry","Lemons","Papayas"]
fruits.splice(5, 0, "Watermelon");
console.log({fruits});
