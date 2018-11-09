
let series=process.argv.slice(2);
console.log('Enter search element=');
let elmt=Number(process.argv[series.length+1]);
console.log('Series='+series);
console.log('Search element='+elmt);
console.log('Index='+search(series,elmt));
function search(array,element)
{
    for(var i=0;i<array.length;i++)
    {
            if(array[i] == element)
               break;
    }
    return i;
}
/*
Output:-
E:\Shiva\javascript programs>node search 10 15 21 36 38 41 36
Enter search element=
Series=10,15,21,36,38,41,36
Search element=36
Index=3
*/
