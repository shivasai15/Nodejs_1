let A=Number(process.argv[2]);
n1=0;n2=1;
console.log('Fibonacci series upto '+A+'=');
console.log(n1);
console.log(n2);
for(var i=1;i<A;i++)
{
    n3=n1+n2;
    if(n3>A)
    {
        break;
    }
    else
    {
        n1=n2;
        n2=n3;
    }
    console.log(n3);
}
/*
Output:-
E:\Shiva\javascript programs>node fibonacciseries 20
Fibonacci series upto 20=
0
1
1
2
3
5
8
13
*/