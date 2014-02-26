function add(x,y){
  return x + y;
}

function sum(numbers){
  var result = 0;
  for(var i = 0; i<numbers.length; i++){
    result += numbers[i];
  }
  return result;
}

function countEvens(numbers){
  var count = 0;
  for(var i=0; i<numbers.length; i++)
    if(numbers[i] % 2 === 0)
      count++;
  return count;
}

function makeEvenStringsUppercase(actual){
  var correction = [];
  var tempVar = "";
  for(var i=0; i<actual.length; i++)
    if(actual[i].length % 2 === 0){
      tempVar = actual[i].toUpperCase();
       correction.push(tempVar);
  }
    else
      correction.push(actual[i]);
  return correction;
}

function sumLengthOfStrings(strings){
  var str = strings.split(' ');
  var length = 0;
  for(var i = 0; i < str.length; i++)
    length += str[i].length;
  return length;
}

function  makeCatWithName(name){
  return {name:name};
}
