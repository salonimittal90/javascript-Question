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

    // var a = 5;
    // var b = 6;
    // console.log("value of a before swap "+a);
    // console.log("value of a before swap "+b)
    // a=a+b;
    // b = a-b;
    // a = a-b
    // console.log("value of a before swap "+a);
    // console.log("value of a before swap "+b)

    //Q7. convert kms into miles
       // 1km = 0.621371;
    //    var a= prompt("enter the value in kilometers");
    //     var b= a*0.621371;
    //    console.log("value of "+a+" kilometer is "+b+" miles")

    // Q8. convert kms into miles
        // 1km = 0.621371 miles
        // function convert(){
        //     var num= document.getElementById('data').value;
        //     var miles=num*0.621371;
        //     document.getElementById('res').innerText= miles +'miles';
        // }
        
    // Q9 convert celsius to fahrenheit conversion 
        // function convert(){
        //     var num = document.getElementById('data').value;
        //     var fahrenheit = num*33.8;
        //     document.getElementById('res').innerText = fahrenheit+' fahrenheit';
        // }

    // Q10  convert js program check if a program is positive negative or zero
        // var num = prompt("enter any number");
        // if(num>0){
        //     alert("number is positive");
        // }
        // else if(num<0){
        //     alert("number is negative");
        // }

        // else{
        //     alert("number is zero")
        // }

    // Q11 generate a random number
        //converting an integer No.
        // let a = Math.floor(Math.random()*10)+1;
        // console.log(`random number between 1 to 10 is ${a}`)


    //     let a = Math.random()+1;
    //     console.log(a);
    //    console.log( Math.floor(a*1000));

    //Checking if a number is odd or even 
    // var a= prompt("enter  any number");
    // if(a%2==0){
    //     console.log("even")
    // }
    // else{
    //     console.log("odd");
    // }

    //checking if a number is prime or not
    //     var a = prompt("enter any number");
    //     if (a==1){
    //         console.log("neither prime and nor composite")
    //     }
    //     else if(a<1){
    //         console.log(`$[a] is not a prime number`)
    //     }
    //     else{
    //     for(i=2;i<a;i++){
    //         if(a%i==0){
    //             var res ="non prime";
    //             break;
    //         }
    //         else{
    //             var res = "prime";
    //         }
    //     }
        
    //     console.log(res)
    // }

    //Finding largest number among three numbers
        // var a= 10;
        // var b=40;
        // var c=30;
        // if(a>b && a>c ){
        //     console.log("a is greater ")
        // }
        // else if(b>c && b>a){
        //     console.log("b is greater ")
        // }
        // else{
        //     console.log("c is greater")
        // }

        // Finding factorial of any number
            // var a = 5;
            // var temp =1;
            // for (i=1;i<=a;i++){
            //     temp  = temp*i;
            // }
            // console.log(temp)

        //Finding factorial of any number WITH RECURSION
            // var number = 5;
            // var facto=1;
            // function fact(n){
            //     if(n>number){
            //         return;
            //     }
            //     facto = facto *n;
            //     n++;
            //     fact(n);
                

            // }
            // fact(1);
            // console.log(facto)



        
         // Finding Armstrong number in any interval
        //     var a = 153
        //    var temp =a;
        //     var rev = 0;
        //   while(a>0){
        //     var rem = a%10;
        //     rev = rev+(rem*rem*rem);
        //          a=Math.floor(a/10);
                 
        //    }

        //    if(temp ==rev){
        //     console.log("armstrong");
        //    }

        //    else{
        //     console.log("not armstrong");
        //    }


        //print the table of any user defined number using function 
        // var num=2;
        //     function number(n){
        //         for(i=1;i<=10;i++){
        //         console.log(n*i);
        //      }
        // }
        //     number(num);

        //  Check if the Numbers Have Same Last Digit   
        // var a = 10;
        // var b = 20;
        // var c = 30;
        //  var res=a%10;
        // console.log(res)
        // var res1=b%10;
        // console.log(res1)
        // var res2=c%10;
        // console.log(res2)
        // if(res==res1 && res==res2 )
        //     {
        //         console.log("last digit of the numbers is same")
        //     }
        // else{
        //     console.log("last digit of the numbers is not same")
        // }

        

