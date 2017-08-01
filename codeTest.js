function arrangArrayOfObjects(array){
	return array.sort(function(a,b){
		return Number(a.rank) - Number(b.rank)
	})

};

function getAverageRank(array){
	var sum = 0 ;
	for (var i = 0; i < array.length; i++) {
		sum +=	array[i].rank

	}
	return sum/array.length
};


// var m={ '60b725f10c9c85c70d97880dfe8191b3': { to: 'QGJpZ2JpcmQ4OA==', from: 'QHRoZVJlYWxFbG1v', last: null
//  },
//      '3b5d5c3712955042212316173ccf37be': { to: 'QHRoZVJlYWxFbG1v', from: 'QGFsaWNl', last: null },
//      '2cd6ee2c70b0bde53fbe6cac3c8b8bb1':
//       { to: 'QGJpZ2JpcmQ4OA==',
//         from: 'QHRoZVJlYWxFbG1v',
//         last: '60b725f10c9c85c70d97880dfe8191b3' }
// ,
//      'e29311f6f1bf1af907f9ef9f44b8328b':
//       { to: 'QGFsaWNl',
//         from: 'QHRoZVJlYWxFbG1v',
//         last: '3b5d5c3712955042212316173ccf37be' }
//  } 
 
//  console.log(Object.Keys(m))

var multiplyItemsOfArray = function(array){
	var result = 1
	for (var i = 0; i < array.length; i++) {
		result*=array[i]
	}
	return result
}




function titleCase(str) {
  var sentence = str.split(' ');
 
 return sentence.map(function(word){
 	return word.toLowerCase().split(' ').map(function(letter,index){
 		return letter.replace(letter[0],letter[0].toUpperCase())
 	})
 }).join(' ')
}

function largestOfFour(arr) {
	var largers=[];
  for (var i = 0; i < arr.length; i++) {
  	var max=arr[i][0];
  	for (var j = 0; j < arr[i].length; j++) {
  		if(arr[i][j]>max){
  			max = arr[i][j];
  		}

  	}
  	  		  			largers.push(max);

  }
  return largers;
}

function confirmEnding(str, target) {
	var arr=str.split(' ');
	var lastword = arr[arr.length-1];
		  
 return lastword===target || lastword.substr(lastword.length -target.length,lastword.length -1)	=== target;	  


}

function repeatStringNumTimes(str, num) {
  if(num===1){
  	return str;
  }else if(num <= 0){
  	return '';
  }else{
  	  	return str + repeatStringNumTimes(str,num - 1);

  }
  
  
}

function truncateString(str, num) {
  if(num<=3){
  	return str.substr(0,num)+'...';
  }else if(num>=str.length){
  	return str;
  }
  return str.substr(0,num - 3) + '...';
}

function chunkArrayInGroups(arr, size) {
   var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
function slasher(arr, howMany) {
 var n=0;
  if (n<=arr.length) {
  arr.splice(0,howMany);
  return arr;
}
}

function mutation(arr) {
	
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
  for (var i = 0; i < secondWord.length; i++) {
  	if(firstWord.indexOf(secondWord[i]) === -1){
  		return false;
  }
    return true;		

  } 
}
/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN
*/


function bouncer(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]===false || arr[i]===null || arr[i]===0 || arr[i]===" " || arr[i]===undefined || isNaN(arr[i])){
  arr.splice(i,1);
		}
	}
	return arr;
}
function destroyer(arr) {
    var filterList = [];
    
    for (var i = 1; i < arguments.length; i++) {
        filterList.push(arguments[i]);
    }

    return arr.filter(function(val) {
        return filterList.indexOf(val) < 0;
    });
}
/*
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once
 it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is 
greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the 
array has been sorted it will look like [3,5,20] and 19 is less
 than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
	
  arr.sort(function(a,b){
  	return a-b;
  });
  for (var i = 0; i < arr.length; i++) {
  	if(arr[i] >= num)
  		return i;
  	
  }
  return arr.length;
}



function rot13(str) {
  // Split str into a character array
  return str.split('')
  // Iterate over each character in the array
    .map.call(str, function(char) {
      // Convert char to a character code
      x = char.charCodeAt(0);
      // Checks if character lies between A-Z
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);  // Return un-converted character
      }
      //N = ASCII 78, if the character code is less than 78, shift forward 13 places
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Otherwise shift the character 13 places backward
      return String.fromCharCode(x - 13);
    }).join('');  // Rejoin the array into a string
}




function sumAll(arr) {
	if(arr[0]>arr[1]){
		var temp =arr[0];
		arr[0]=arr[1];
		arr[1]=temp;
	}
  var sum=0;
  var all=[];
  for (var i = arr[0]; i <= arr[1]; i++) {
	all.push(i);
  }
  for (var i = 0; i < all.length; i++) {
  	sum +=all[i]
  }
  return sum;

}

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
  	if(arr2.indexOf(arr1[i])=== -1){
  		newArr.push(arr1[i])
  	}
  }
  for (var j = 0; j < arr2.length; j++) {
  	if(arr1.indexOf(arr2[j])=== -1){
  		newArr.push(arr2[j])
  	}
  }
  // Same, same; but different.
  return newArr;
}
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}
/*
Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that 
have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be 
present in the object from the collection if it is to be 
included in the returned array.

For example, if the first argument is
 [{ first: "Romeo", last: "Montague" }, 
 { first: "Mercutio", last: null }, 
 { first: "Tybalt", last: "Capulet" }],
  and the second argument is { last: "Capulet" },
   then you must return the third object from the array 
   (the first argument), because it contains the property
    and its value, that was passed on as the second argument.
*/
function whatIsInAName(collection, source) {
  var arr=collection.filter(function(element){
  	for(var key in source){
  		if(source[key]!==element[key]){
  			return false;
  		}
  	}
  	return true;
  });
  return arr;
}



function myReplace(str, before, after) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
  	if(words[i]===before){
  		if(before[0]===before[0].toUpperCase()){

  			after=after[0].toUpperCase()+after.substr(1,after.length-1);
  			  		words[i]=after

  		}
  		words[i]=after;
  	}
  }
  return words.join(' ');
}

/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster)
 of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
/*
DNA Pairing
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the
 missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, 
return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up 
in an array, and all the arrays are grouped into one encapsulating array.
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/
function pairElement(str) {
  var arr=str.split('');
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]==='A'){
      arr[i]=['A','T'];
    }else if(arr[i]==='T'){
      arr[i]=['T','A'];
    }else if(arr[i]==='C'){
      arr[i]=['C','G'];
    }else if(arr[i]==='G'){
      arr[i]=['G','C'];
    }else{
      arr[i]='not match';
    }
  }
  return arr;
}
/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. 
Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined.
*/
function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var len = str.length;
  var start = alphabet.indexOf(str[0]);
  
  for(var i = start; i < start + len; i++){
    if(!str.includes(alphabet[i])){
      return alphabet[i];
    }
  }
  return undefined;
}
//another solution
function fearNotLetter(str) {
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var letterRange = letters.slice(letters.indexOf(str[0]),letters.indexOf(str.slice(-1)));
  var missingLetter = "";
  
 for (var i = 0; i < str.length; i++){
  if(str[i] !== letterRange[i]){
   missingLetter = letterRange[i];
      return missingLetter;
  }
   else if(str.slice(-1) === str[i]) {
     return undefined;
   }
 }
return letterRange;
}
//===========================================================================//
/*
Boo who
Check if a value is classified as a boolean primitive.
 Return true or false.

Boolean primitives are true and false.
booWho(true) should return true.
booWho(false) should return true.
booWho([1, 2, 3]) should return false.
booWho([].slice) should return false.
booWho({ "a": 1 }) should return false.
booWho(1) should return false.
booWho(NaN) should return false.
booWho("a") should return false.
booWho("true") should return false.
booWho("false") should return false.
*/
function booWho(bool) {
  if(bool===true || bool===false){
    return true;
  }else{
    return false;
  }
}
//=======================================================================
/*Sorted Union
Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included
 in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
 should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) 
should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 
should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
function uniteUnique(arr) {
  var uniqArray=[];
var args=Array.from(arguments);
for (var j = 0; j < args[0].length; j++) {
    if(uniqArray.indexOf(args[0][j])=== -1){
    uniqArray.push(args[0][j]);
  }
    }
for (var i = 1; i < args.length; i++) {
  for (var j = 0; j < args[i].length; j++) {  
  if(uniqArray.indexOf(args[i][j])=== -1){
    uniqArray.push(args[i][j]);
  }
}
}
return uniqArray;
}


/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and 
' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. 
Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") 
should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') 
should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.
*/
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}

//another solution
function convertHTML(str) {
  var temp = str.split('');//turns string into an array of letters
 for (var i=0;i<temp.length;i++){ //loops through the temp array
if (temp[i]==='&') { //if you see an &
    temp[i]='&amp;'; //change it to &amp;
} else if (temp[i]==='<'){//if you see a <
    temp[i]='&lt;';//change it to &lt;
  } else if (temp[i]==='>'){//if you see a >
    temp[i]='&gt;';//change it to &gt;
  } else if (temp[i]==='"'){//if you see a " inside '
    temp[i]='&quot;';//change it to &qout;
  } else if (temp[i]==="'"){//if you see a ' inside "
    temp[i]="&apos;";//change it to &apos;
  }
  }
  temp = temp.join(''); //turns the array back into a string
  return temp;
}
//another solution
function convertHTML(str) {
  var entities = { '&': '&amp;', '<':'&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'}
  return str.replace(/[&<>"']/g, function(match) {
    return entities[match]
  } )
}
//=============================================================================
/*Spinal Tap Case
Convert a string to spinal case. Spinal case
 is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. 
Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/
function spinalCase(str) {
  var words = str.split(/\s|_|(?=[A-Z])/);
  return words.map(function(word){
    return word.toLowerCase();
  }).join('-');
}
//=======================================================================
/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every 
additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci 
numbers less than 10 are 1, 1, 3, and 5.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/
function sumFibs(num) {
  var fibonacci=[0,1];
  for(var i=2;i<=num;i++){
    if(fibonacci[i -1] + fibonacci[i - 2]<=num){
 fibonacci.push(fibonacci[i -1] + fibonacci[i - 2]);
  }
}
  var sum=0;
  for (var i = 0; i < fibonacci.length; i++) {
    if(fibonacci[i]%2 !==0){
      sum +=fibonacci[i];
    }
  }
  return sum;
}
//==========================================================================
/*
Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than 
one and having only two divisors, one and itself.
 For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/
function sumPrimes(num) {
  function isPrime(n){
   if(n<=1){
    return false
  }
  var l = Math.floor(Math.sqrt(n))
  for(var i=2;i<=l;i++){
    if(n % i === 0) {
      return false;
    }
  }

  return true;
  }
var primaries=[];
for(var i=2;i<=num;i++){
  if(isPrime(i)){
    primaries.push(i);
  }
}
return primaries.reduce(function(acc,number){
  return acc + number;
},0);
}
//=========================================================================================
/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can 
be evenly divided by both, as well as by all sequential numbers in the 
range between these parameters.

The range will be an array of two numbers that will not necessarily
 be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
that is evenly divisible by all numbers between 1 and 3.
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
*/
function smallestCommons(arr) {

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var mltple = max;

  for(var i = max; i >= min; i--){
    if(mltple % i !== 0){
      mltple += max; 
      i = max;
    } 
  }

  return mltple;  
}
//===========================================================================================
/*Finders Keepers
Create a function that looks through an array (first argument) and 
returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
*/
function findElement(arr, func) {
  return arr.filter(function(item){
    return func(item);
  })[0];
}
//==============================================================================================
/*Drop it
Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first 
elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. 
Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.shift()
Array.prototype.slice()
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/
function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}
//===========================================================================================
/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
*/
function steamrollArray(arr) {
  var res=[];
  function test(subarray){
  for (var i = 0; i < subarray.length; i++) {
   if(Array.isArray (subarray[i])){
        test(subarray[i]);
   }else{
        res.push(subarray[i]);

   }
  }
  return res;
}
return test(arr);
}
//=============================================================================================
/*Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
*/
function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += (String.fromCharCode(decValue));

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}
//=======================================================================================
/*Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
truthCheck([{"single": "yes"}], "single") should return true
truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
*/
function truthCheck(collection, pre) {
 
  for (var i = 0; i < collection.length; i++ ) {
    if (!collection[i][pre]) {
      return false;
    }
  }
  
  return true;
  
}
//===========================================================================================
/*Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects 
one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) 
should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.
*/
function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}
//=======================================================================================
/*Symmetric Difference
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.reduce()
Symmetric Difference
sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]
*/
function sym(args) {
  var res=[];
  var args=Array.from(arguments);
  for (var i = 0; i < args.length; i++) {
    for(var j=0;j<args[i].length;j++){
      if(args[i].indexOf(args[i+1][j])=== -1){
        res.push(args[i][j]);
      }
    }
  }
  return res;
}
