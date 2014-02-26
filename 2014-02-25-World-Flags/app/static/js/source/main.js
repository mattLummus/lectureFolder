(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.country').click(country);
    $('.flag').click(flag);
    $('#match').click(requestMatch);
  }

  var score = 10;
  var count = 30;
  var counter = setInterval(timer,1000);

  function win(){
    clearInterval(counter);
    clearInterval(youLose);
    $('body').css('background-color', 'red');
    $('div').empty();
    alert('You win!');
  }

  function timer(){
    count=count-1;
    console.log(count);
    $('#timer').text(count);
    if (count<=0){
      clearInterval(counter);
      gameOver();
      return;
    }
  }

  function gameOver(){
    setInterval(youLose,300);
    setInterval(redScreen,50);
  }

  function youLose(){
    alert('You Suck!');
  }

  function redScreen(){
    $('body').css('background-color', 'red');
    $('div').empty();
  }

  function country(){
    var self = $(this)[0];
    var text = self.textContent;
    console.log('This country is '+ text);
    var type = '#cText';
    updateStats(type, text);
    $('.selectedC').removeClass('selectedC');
    $('.wrongC').removeClass('wrongC');
    $('.wrongF').addClass('selectedF');
    $('.wrongF').removeClass('wrongF');
    $(self).addClass('selectedC');
  }

  function flag(){
    var self = $(this)[0];
    var text = $(self).attr('data-code');
    console.log('This flag is '+ text);
    var type = '#fText';
    updateStats(type, text);
    $('.selectedF').removeClass('selectedF');
    $('.wrongF').removeClass('wrongF');
    $('.wrongC').addClass('selectedC');
    $('.wrongC').removeClass('wrongC');
    $(self).addClass('selectedF');
  }

  function updateStats(type, text){
    $(type).text(text);
  }

  function requestMatch(){
    var C = $('#cText').text();
    var F = $('#fText').text();
    var url = '/match?C=' +C+ '&F=' +F;
    console.log(url);
    $.getJSON(url, function(data){
      if(data.answer === true){
        trueMatch(C,F);
      }
      else{
        falseMatch(C,F);
      }
    });
  }

  function trueMatch(C,F){
    $('.flag-'+F).hide();
    $('.'+C).hide();
    score -= 1;
    console.log('score is '+score);
    if(score<1){win();}
  }

  function falseMatch(C,F){
    $('.flag-'+F).addClass('wrongF');
    $('.'+C).addClass('wrongC');
    $('.selectedC').removeClass('selectedC');
    $('.selectedF').removeClass('selectedF');
  }

})();

