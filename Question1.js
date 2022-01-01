//create an array using .push with prompt and also using parseInt(); -> Take three numbers and find max. (Using arrays) -> Math.max(); //For further reading.

var n = parseInt(prompt("enter the length of array"));
var arr = new Array(n);
for(var i=0;i<n;i++)
{
arr[i] = parseInt(prompt("enter "+(i+1)+" element"));
}
document.write(Math.max(...arr));