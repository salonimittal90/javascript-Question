// Q1. hello world program 

// console.log("hello world")
// alert("hello world")
// document.write("<h1>hello world</h1>")

// Q2. add two numbers
// static program

// const a= 20;
// const b= 30;
// const res = a+b;
// console.log(res)

//dynamic program 

// const a = parseInt(prompt("enter the 1st number:"));
// const b = parseInt(prompt("Enter the 2nd number:"));

// const res = parseInt(a+b);
// alert("the sum of 1st no. and 2nd no. is:"+res);


// Q3. find a square root of a Number
// square of 81 is 9

// const a= prompt("enter the number");
// const res= Math.sqrt(a)
// console.log(res)

//Q4. find the area of triangle
    //formula: (b*h)/2

    // const l= prompt("enter the base of the triangle")
    // const b= prompt("enter the height of the triangle")
    // const res= (b*h)/2
    // console.log("area of a triangle is:"+res)

//Q5. calculate the area of regular triangle using heron's formula

    // var a = 10;
    // var b = 20;
    // var c = 20;
    // var s = (a+b+c)/2;
    // var temp = s*(s-a)*(s-b)*(s-c)
    // var area = Math.sqrt(temp);
    // console.log(area);

//Q6. swaping of two numbers with using temp variable
    // var a = 5;
    // var b = 6;
    // var temp;
    // console.log("value of a before swap "+a);
    // console.log("value of a before swap "+b)
    // temp = a;
    // a=b;
    // b=temp;
    // console.log("value of a before swap "+a);
    // console.log('value of b before swap '+b)

   // Q6. swaping of two numbers without using temp variable

    var a = 5;
    var b = 6;
    console.log("value of a before swap "+a);
    console.log("value of a before swap "+b)
    a=a+b;
    b = a-b;
    a = a-b
    console.log("value of a before swap "+a);
    console.log("value of a before swap "+b)