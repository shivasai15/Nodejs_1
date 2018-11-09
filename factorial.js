let n=Number(process.argv[2]);
console.log('Factorial of '+n+'is '+factorial(n));
function factorial(A)
{
    if(A>0)
    {
                if(A==1)
                    return 1;
                else
                    return A*factorial(A-1);
    }
}   
/* 
Output:-
E:\Shiva\javascript programs>node factorial 8
Factorial of 8is 40320
*/