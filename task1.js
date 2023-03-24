//JavaScript program to swap two variables
let temp;
let a=10;
let b=5;
const buttonA =()=>{
    return  document.getElementById("demoA").innerHTML="a = "+a;
}
const buttonB =()=>{
    return  document.getElementById("demoB").innerHTML="b = "+b;
  }

console.log("a = "+ a)
console.log("b = "+b)
const swap =()=>{
    temp=a;
    a=b;
    b=temp;
    return  a
  }
  


