(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(add);
    $('#mult').click(mult);
  }

  function add(){
    var y = $('#a').val();
    var x = $('#b').val();
    var url = '/calc/add/?x=' +x+ '&y=' +y;
    $.getJSON(url, function(data){
      $('#sum').text(data.sum);
      //formatting
      $('#sum').css('font-size', 50);
      $('#sum').css('color', 'blue');
      $('#sum').css('background-color', 'white');
      $('#sum').css('display', 'inline-block');
      $('#sum').css('border', '2px solid black');
    });
  }

  function mult(){
    var x = $('#c').val();
    var url = '/calc/mult/?x=' +x;
    $.getJSON(url, function(data){
      $('#product').text(data.product);
      //formatting
      $('#product').css('font-size', 50);
      $('#product').css('color', 'blue');
      $('#product').css('background-color', 'white');
      $('#product').css('display', 'inline-block');
      $('#product').css('border', '2px solid black');
    });
  }

})();

