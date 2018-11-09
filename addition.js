let A=Number(process.argv[2]);
let B=Number(process.argv[3]);
 C=Add(A,B);
 console.log('sum='+C);
function Add(x,y)
{
       return x+y;
}

/* 
Output:-
E:\Shiva\javascript programs>node addition 15 05
sum=20
*/