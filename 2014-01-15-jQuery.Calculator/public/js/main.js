$(document).ready(initialize);{

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
}

function sum(){
  var s = 0;

  $('.numbers').each(function (index, element){
    s += parseFloat(element.value);
  });
  $('result2').text(s);
}

function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#op').val('');
  $('#result').text('');
}

function calculate(){
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $('#op').val();
  var result = compute(num1, num2, op);
  $('#result').text(result);
}

function compute(x, y, op){
  var result;
  switch(op){
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    default:
  }
  return result;
}

/**
function sum(){
  var result = "";
  var n1 = $('#n1').val();
  n1 = parseFloat(n1);
  var n2 = $('#n2').val();
  n2 = parseFloat(n1);
  var n3 = $('#n3').val();
  n3 = parseFloat(n1);
  var n4 = $('#n4').val();
  n4 = parseFloat(n1);
  var n5 = $('#n5').val();
  n5 = parseFloat(n1);
  var result = n1+n2+n3+n4+n5;
  //return result;
  $('#result2').text(result);
}

function product(){
  var sum = "";
  var n1 = $('#n1').val();
  n1 = parseFloat(n1);
  var n2 = $('#n2').val();
  n2 = parseFloat(n1);
  var n3 = $('#n3').val();
  n3 = parseFloat(n1);
  var n4 = $('#n4').val();
  n4 = parseFloat(n1);
  var n5 = $('#n5').val();
  n5 = parseFloat(n1);
  var result = n1*n2*n3*n4*n5;
  //return result;
  $('#result2').text(result);
}
*/
}
