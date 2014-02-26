(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#sum').click(sum);
    $('#canDrink').click(drink);
    $('#product').click(product);
    $('#calc').click(names);
  }

  function one(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function two(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/favColor?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function sum(){
    var one = $('#txt1').val();
    var two = $('#txt2').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += ('/sum/'+one+'/'+two+'?callback=?');
    $.getJSON(url, function(data){
      $('#sumR').text(data.sum);
    });
  }

  function drink(){
    var name = $('#txtName').val();
    var age = $('#txtAge').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += ('/drink/'+name+'/'+age+'?callback=?');
    $.getJSON(url, function(data){
      $('#drinkR').text(data.msg);
    });
  }

  function product(){
    var numbers = $('#txtProduct').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += ('/product?numbers='+numbers+'&callback=?');
    $.getJSON(url, function(data){
      $('#productR').text(data.product);
    });
  }

  function names(){
    var n = $('#txtNames').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += ('/names?nm='+n+'&callback=?');
    $.getJSON(url, function(data){
      $('#namesR').text(data.result);
    });
  }

})();

