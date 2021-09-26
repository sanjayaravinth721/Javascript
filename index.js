var number=5;
console.log(number)
var a = "hiii";
let b =1;
console.log(a+" brother");
let i = "sanjay";
 const k = "from constant";
function snj(){
    let i="aravinth"     
    console.log("name is "+i)
    console.log(k+ " inside function is constant")
}
function fib(){
    var n =10;
    var a=-1,b=1;
    var c;
    for(var i=0;i<n;i++){
        c=a+b;
        console.log(c+" ")
        a=b
        b=c
    }
}
function exception(){
    const a =0;
    try{
         a=9;
        console.log(a);
    }
    catch(e){
        console.log("from execption "+e);
    }
}
function array(){
    var a=[10];
    for(var i = 0;i<10;i++){
        a[i]=i;
    }
    console.log("From array "+a[7]);
    
}
var p = ()=>{
    var a =9;
    if(a>10){
        console.log("from anonymous success")
    }
    else{
        console.log("From anonymous failed")
    }
}
console.log(p())
array();
exception();
console.log(fib());
snj();
console.log("outside function name is "+i)
console.log("outside const is "+ k)
console.log(b+1);