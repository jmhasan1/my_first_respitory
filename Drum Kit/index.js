
/*document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){
    alert("I got Clicked");
}
*/
// Using Annonymous Function
/*document.querySelector("button").addEventListener("click",function (){
    alert("I got Clicked");
});*/
var noOfDrumButtons = document.querySelectorAll(".drum").length;
var i=0;
while(i<noOfDrumButtons){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    
    //this.style.color="white";
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);

});
i++;
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
             break;
        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickBass = new Audio ("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;

        default: console.log(buttonInnerHtml);
    } 
}
function buttonAnimations(currentkey) {
    
}
/*
// Example of Higher order of function
function add (num1,num2) {
    return num1+num2;
}
function mulltiPly (num1,num2) {
    return num1*num2;
}
function subsTract (num1,num2) {
    return num1 - num2;
}
function divide (num1,num2){
    return num2/num1;
}
function remainder (num1,num2){
    return num2%num1;
}
function calculator (num1,num2,operator) {
    return operator(num1,num2);
}
var res = calculator(4,6,mulltiPly);
console.log(res);
*/

// example of Objects and Constructors

var houseKeeper1 = {
    yearsofExp :12,
    age : 31,
    name1 : "JaNe",
    cleaning : ["bathroom","bedroom","lobby"]
}
console.log(houseKeeper1.name1);

function HouseKeeper1 (name1,yearsofExp,age,cleaning) {
    this.yearsofExp= yearsofExp;
    this.age = age;
    this.name1 = name1;
    this.cleaning = cleaning;
    this.clean = function () {
        console.log("Cleaning in Progress");
    };
}
var houseKeeper2 = new HouseKeeper1 ("Merry",12,33,["cleaning utensils","bathroom"]);
console.log(houseKeeper2.cleaning);
houseKeeper2.clean();

