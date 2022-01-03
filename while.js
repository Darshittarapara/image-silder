// // var a=5;
// // var name=' darshit';
// // var name2 ="Harsh"
// // while (a>=1) {
// //   if (a>=3) {
// //     var c ="hello ";
// //     document.write(c + name +'<br>');
// //
// //   }
// //   else {
// //     document.write('hello ' + name2+'<br>');
// //   }
// // a=a-1;
// //
// // }
// // var list =['AUDI ' ,'Bmw ' ,'jaguar '];
// // var price =['40 lakh' ,'1.16 crore' ,'50 lakh'];
// // var i=0;
// // while (i<=2) {
// //   var total =list[i] + 'Price:' + price[i] + '<br>';
// //   document.write(total);
// //   i=i+1;
// // }
// var i=5;
// while (i>=1) {
//   document.write('THIS NUMBER IS ' + i + '<br>');
//   document.write('<br>')
//   i=i-1;
// }
// var a=prompt('enter the numbers');
// var b =prompt('enter the number') ;
// if (a>b) {
//   document.write('a is grether');
//   var c =a+b;
//   alert(c);
// }
// else {
//   document.write('b is grether');
//   var c =a+b;
//   alert(c);


var  silde=document.getElementById('images');
var Btn1=document.getElementById('btn-1');
var Btn2=document.getElementById('btn-2');
var Btn3= document.getElementById('btn-3');
var Btn4=document.getElementById('btn-4');
var Btn5 =document.getElementById('btn-5');


function btn1() {
    silde.style.transform='translate(-0%)';

    Btn4.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn2.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn3.style.backgroundColor="rgba(255, 255, 255,0.5)";
}
function btn2() {
    silde.style.transform='translate(-20%)';
    Btn2.style.backgroundColor="white";
    Btn4.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn5.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn1.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn3.style.backgroundColor="rgba(255, 255, 255,0.5)";
}
function btn3() {
    silde.style.transform='translate(-40%)';
    Btn3.style.backgroundColor="white";
    Btn4.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn2.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn5.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn1.style.backgroundColor="rgba(255, 255, 255,0.5)";
}
function btn4() {
    silde.style.transform='translate(-60%)';

    Btn4.style.backgroundColor="white";
    Btn1.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn2.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn5.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn3.style.backgroundColor="rgba(255, 255, 255,0.5)";
}
function btn5() {
    silde.style.transform='translate(-80%)';

    Btn5.style.backgroundColor="white";
    Btn1.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn1.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn2.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn3.style.backgroundColor="rgba(255, 255, 255,0.5)";
    Btn4.style.backgroundColor="rgba(255, 255, 255,0.5)";
}
