let a=process.argv.slice(2);
function aorder(arr)
{
        for(var i=0;i<arr.length;i++)
        {
                for(var j=0;j<arr.length;j++)
                {
                        if(arr[j]>arr[j+1])
                        {
                                temp=arr[j];
                                arr[j]=arr[j+1];
                                arr[j+1]=temp;
                        }
                }
        }

}
aorder(a);
console.log(a);
/*
Output:-
E:\Shiva\javascript programs>node sorting 9 8 5 2 6 4 7
[ '2', '4', '5', '6', '7', '8', '9' ]
*/