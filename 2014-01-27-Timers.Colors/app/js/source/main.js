(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
    $('#reset').click(reset);
    $('#faster').click(faster);
    $('#slower').click(slower);
    //setTimeout(alertMe, 5000);
  }

  var count = 500;

  function start(){
    clearInterval(timer);
    timer = setInterval(makeColorBox, count);
  }

  var timer;

  function makeColorBox(){
    var $div = $('<div>');
    $div.addClass('box');
    $div.css('background-color', randomColor());
    $('#container').prepend($div);

    $('body').css('background-color', randomColor());
  }

  function faster(){
    count = count-100;
    start();
  }
  function slower(){
    count = count+100;
    start();
  }

  function stop(){
    clearInterval(timer);

  }

  function reset(){
    $('#container').empty();
    $('body').css('background-color', 'white');
    count = 500;
  }

  function randomColor(){
    var red = Math.floor(Math.random()*256);
    var grn = Math.floor(Math.random()*256);
    var blu = Math.floor(Math.random()*256);
    var alp = Math.random();
    var color = 'rgba('+red+','+grn+','+blu+','+alp+')';
    return color;
  }

  /**
   *function alertMe(){
   *   alert('this was called by a timer');
   *}
  */

})();
