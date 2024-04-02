// Question 1 : Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function names(){
    let car = [];
    let reversearray = car.reverse()
    console.log([reversearray])
}
 
// Question 2 : Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function positive(){
    let numbers = [];
    numbers.forEach(y =>{
        if(x>0){
            console.log("The number is positive");
        }
        else if(x<0){
            console.log("The number is negative");
        }
        else{
            console.log("Zero");
        }
    });
}

positive();


// Question 4: Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2

let numbers = [];
let isMultipied = [];

function multiply(w,x,y){
numbers.forEach(z=>{
    let result = z*2
    isMultipied.push(result);
})

console.log(isMultipied);
}

multiply.apply(numbers);


//Question 5: Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

let Numbers = [];
function NewNumbers(p,q,r);
let NewValue = [];
for(let i=0; i<Numbers.length; i++){
    if(i<=3){
        let result = Numbers[i]*8;
        Numbers.push(result);
        
    }
}
