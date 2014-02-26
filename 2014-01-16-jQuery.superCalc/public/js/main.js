$(document).ready(initialize);

function initialize(){
  $('.numbers').click(displayNumber);
  $('#changeSign').click(changeSign);
  $('#push').click(pushToQueue);
  $('.operator').click(compute);
}

function compute(){
  var operator = this.id;
  var $lis = $('#queue li');
  var numbers = parseTags($lis);
  var result = 0;

  if(numbers.length<2){
    if(operator === "clear")
      result = 0;
    else
      return;
  }

  if(numbers.length>2 && operator !== "sum"){
    if(operator === "clear")
      result = 0;
    else
      return;
  }
  else{
  switch(operator){
    case 'add':
      result = numbers[0] + numbers[1];
      break;
    case 'sub':
      result = numbers[1] - numbers[0];
      break;
    case 'mult':
      result = numbers[0] * numbers[1];
      break;
    case 'div':
      result = numbers[0] / numbers[1];
      break;
    case 'sum':
      for(var i = 0, len=numbers.length; i<len; i++){
          result += numbers[i];
          debugger
          }
      break;
    case 'pow':
      result = Math.pow(numbers[1], numbers[0]);
      break;
    case 'clear':
      result = 0;
      break;
    default:
  }
  }
    $('#answer').text(result);
    $('#queue').empty();
    addVis();
}


function pushToQueue(){
 var display = $('#answer').text();
 $('#answer').text('0');
 var $li = $('<li>');
 $li.text(display);
 $('#queue').prepend($li);
 var $lis = $('#queue li');
 var numbers = parseTags($lis);
 if(numbers.length>2)
  hideVis();
}

function displayNumber(){
  var display = $('#answer').text();
  var current = this.textContent;
  var output;

  if(current ==='.' && containsChar(display, '.')) return;
  if(current ==='.' && display === '0') output = '0.';

  if(display === '0' && current !== '.')
    output = current;
  else
    output = display + current;

  $('#answer').text(output);
}

function changeSign(){
  var number = $('#answer').text();
  number *= -1;
  $('#answer').text(number);
}

function hideVis(){
  $('.operator').addClass('hide');
  $('#sum').removeClass('hide');
  $('#clear').removeClass('hide');
  $('#sum').addClass('emph');
}

function addVis(){
  $('.operator').removeClass('hide');
  $('#sum').removeClass('emph');
}
