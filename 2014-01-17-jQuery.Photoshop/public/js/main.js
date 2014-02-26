$(document).ready(initalize);

function initalize(){
  $('#add-color').click(clickAddColor);
  $('#add-pixels').click(clickAddPixels);
  $('#colors').on('click', '.color', clickSelectColor);
  $('#pixels').on('mouseover', '.pixel', hoverColorPixel);
  $('.pixel').click(clickPauseColor);
  $('.sizer').click(clickSetPixels);
  $('#clear').click(clear);
}

function clear(){
  $('#pixels').empty();
}

function hoverColorPixel(){
  var color = $('.selected').css('background-color');
  $(this).css('background-color', color);
}

//for text box
function clickAddPixels(){
  var num = $('#number-text').val();
  num = parseInt(num);

  for(var i = 0; i<num; i++){
    var $pixel = $('<div>');
    var sizeFactor = Math.sqrt(num/2.5);
    $pixel.css("height:", sizeFactor);
    $pixel.css("width:", sizeFactor);
    $pixel.addClass('pixel');
    $('#pixels').prepend($pixel);
  }
}

//for size buttons
function clickSetPixels(){
 var num = $(this).attr('id');
 switch(num){
   case 'sm':
     addPixels(1960, 20)
       //css resize
    break;
   case 'med':
     addPixels(510, 40)
       //css resize
    break;
   case 'lg':
     addPixels(144, 75)
       //css resize
    break;
   default:
  }
}

function addPixels(num, size){
  for(var i = 0; i<num; i++){
    var $pixel = $('<div>');
        $pixel.addClass('pixel');
        $pixel.css("height", size);
        $pixel.css("width", size);
    $('#pixels').prepend($pixel);
  }
}

function clickSelectColor(){
  if($(this).hasClass('selected'))
    $(this).removeClass('selected');
  else{
    $('.color').removeClass('selected');
    $(this).addClass('selected');
  }
}

function clickPauseColor(){
  $(this).css('background-color', color);
}

function clickAddColor(){
  var color = $('#color-text').val();
  $('#color-text').val('');
  $('#color-text').focus();

  var $box = $('<div>');
  $box.addClass('color');
  $box.css('background-color', color);

  $('#colors').prepend($box);
}


