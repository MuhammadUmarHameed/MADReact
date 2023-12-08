console.log("Hello World"); //we use comment like this
/*or like this*/
/*Data types in javascript
undefined, null, boolean, string, symbol, number, and object*/

var Myname = "HEllo Umar"

console.log(Myname);

//var can be used as public, let is more like a private variable and const is a variable which can't be manipulated.
//in JS we can use ; or we choose not to.
let MyName = "Hello Umar";

const pi = 3.147

myarray=[['hello',1],['yeah history',3]];

//now i can add something in array using push it adds elemnt or array at the last index
myarray.push=["new",4];
//we can also manipulate using pop which will remove the last index element and assigninto said var

var helloarray= myarray.pop();
//shift is also used for manipulation but it remove first index element while unshift add an elemnt at the first index.

myarray.shift();
//wiil remove first element
myarray.unshift=['enter',1];
// we can also create an array using var
var mylist=[['hello',1],['bye',2],['say',3]];

//we can make function and it's body can be called using it.
function hello(){
    console.log("Hello umar");
}

hello();
//this hello will initiate the function hello body

//we can also assign an argument in paranthesis of function and call be used as you want

function newarg(a,b){
    console.log(a-b);
}

newarg(10,5);
//with this we are subtracting 5 out of 10

//var can be of 2 scope one global or local. if it is declared outside function, it can be accesed anywhere in your code and if we want a var delcared within a function but used throughtout code then we don't write var

var myglobal=10;

function fun1(){
    oopsglobal = 5;
//here we declared a var which is within function but is global by not typing var
}

function fun2(){
    var output="";
    myglobal += oopsglobal
    if(typeof myglobal !=undefined){
        output += "myGlobal:" + myglobal;
    }
    console.log(output);
}
fun1();
fun2();

//if we declare a global var and also assign a function same local var then the global will work everywhere else but in that function it will output local var with same global var name

function Num(num){

    return num -7;
}

console.log(Num(10));