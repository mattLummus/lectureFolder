/* jshint unused:false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#priForm').submit(submitPri);
    $('#priTable').on('click', '.hotN', hotN);
    $('#priTable').on('click', '.hotV', hotV);
    $('#priTable').on('click', '.dButt', deletePri);
    $('#priTable').on('click', '.sButt', savePri);
    loadPri();
  }

  function hi(){
    alert('done!');
  }

  function deletePri(){
    var id = $(this).parent().parent().attr('data-id');
    var url = generateURL('/priorities/');
    url += id;
    console.log(url);
    var type = 'DELETE';
    var success = hi;
    $.ajax({url:url, type:type, success:success});

    alert('delete');
    event.preventDefault();
  }

  function savePri(){
    var id = $(this).parent().parent().attr('data-id');
    var url = generateURL('/priorities/');
    url += id;
    console.log(url);
    var type = 'PUT';
    var success = hi;
    var $name = $(this).parent().parent().first()[0].childNodes[1].value;
    var $value = $(this).parent().parent().first().next().first();
    console.log('name');
    console.log($name);
    console.log('value');
    console.log($value);
    //$.ajax({data:data, url:url, type:type, success:success});

    alert('save');
    event.preventDefault();
  }

  function hotN(){
    var self = $(this);
    hot('N', self);
  }

  function hotV(){
    var self = $(this);
    hot('V', self);
  }

  function hot(x, self){
    var txt = self.text();
    self.text('');
    var $txt = $('<input>');
    $txt.addClass('hotText');
    $txt.val(txt);
    self.append($txt);
    var $dButt = $('<button>');
    var $sButt = $('<button>');
    $dButt.text('Delete');
    $sButt.text('Save');
    $dButt.addClass('dButt tiny');
    $sButt.addClass('sButt tiny');
    switch(x){
      case 'N':
        self.next().next().append($dButt);
        self.next().next().next().append($sButt);
        break;
      case 'V':
        self.next().append($dButt);
        self.next().next().append($sButt);
        break;
      default:
        alert('whoops?!');
    }
  }

  function submitPri(){
    var data = $(this).serialize();
    var url = generateURL('/priorities');
    var type = 'POST';
    var success = newPri;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function newPri(priority){
    $('#userForm input').val('');
    alert('New User!');
  }

  function generateURL(path){
    var url = window.location.origin.replace(/[0-9]{4}/, 4000);
    url += path;
    return url;
  }

  function loadPri(){
    var url = generateURL('/priorities');
    $.getJSON(url, displayPris);
  }

  function displayPris(data){
    var x = data.priorities.length;
    for(var i=0; i<x; i++){
      displayPri(data.priorities[i]);
    }
  }

  function displayPri(data){
    var $row = $('<tr>');
    var $name = $('<td>');
    var $value = $('<td>');
    var $del = $('<td>');
    var $save = $('<td>');

    $row.attr('data-id', data._id);
    console.log(data._id);
    console.log('----');
    $name.text(data.name);
    $value.text(data.value);
    $name.addClass('hotN');
    $value.addClass('hotV');
    $del.addClass('.del');
    $save.addClass('.save');
    $row.append($name, $value, $del, $save);
    $('#priTable').append($row);
  }

})();

