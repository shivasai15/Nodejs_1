let num1=Number(process.argv[2]);
let num2=Number(process.argv[3]);
difference=sub(num1,num2);
console.log('Difference='+difference);
function sub(x,y)
{
    return x-y;
}
/* 
Output:-
E:\Shiva\javascript programs>node subtraction 100 05
Difference=95
*/