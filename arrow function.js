// Print odd numbers in an array
var temp=[]
var odd=(res)=>{
for (var i=0;i<res.length;i++){
if (res[i]%2==1){
temp.push(res[i]);
}
}
return temp;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));


// Sum of all numbers in an array
var arr=[1,2,3,4,5,6,7,8,9,10]
var sum=arr.reduce((sum,cv)=>sum+cv);
console.log(sum);

//Return all strings to titlecaps


var str=["abc","asa","fsd"];

 var titleCase=(str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

for (var i=0;i<str.length;i++){
    console.log(titleCase(str[i]))
    }

//Return all palindromes
var str= ['wew','pte','madam'];
var temp=[];

var Palindrome=(str)=> {

    const arr = str.split('');

    const reversearr = arr.reverse();

    const reversestr = reversearr.join('');

    if(str == reversestr) {
        temp.push(str)
    }
}
for (var i=0;i<str.length;i++){
    Palindrome(str[i]);
}
console.log(temp);