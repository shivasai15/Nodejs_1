let num=Number(process.argv[2]);
isprime(num);
function isprime(n)
{
        let count=0;
        for(var i=2;i<n/2;i++)
        {
                if(n%i==0)
                {
                        count++;
                        break;
                }          
        }
        if(count)
            console.log(n+' is not prime');
        else 
            console.log(n+' is prime');
}
/*
Output:-
E:\Shiva\javascript programs>node prime1 11
11 is prime
*/