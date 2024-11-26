var a =["apple","banana","apple","guava","banana"]
var b = [...new Set(a)]
console.log(b);

var counts={};
a.map(function(item){
    counts[item]=(counts[item] || 0)+1
})  
//runs the func for each element in a array
for(var key in counts){
    console.log(key +":"+counts[key]);
}
var a1='moms'
function palindrome(str) {
    const reverse=str.split('').reverse().join('');
    return str === reverse
}

if(palindrome(a1)){
    console.log('true');
    
}else{
    console.log('false');
    
}