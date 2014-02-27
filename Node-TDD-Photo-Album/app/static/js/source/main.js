(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#new').click(newAlbum);
    load();
  }

  function newAlbum(){
    var url = window.location.origin + '/new';
    $.getJSON(url, nada);
    event.preventDefault();
  }

  function load(){
    //var url = window.location.origin;
    //$.getJSON(url, displayAlbums);
    console.log(displayAlbums);
  }

  function displayAlbums(data){
    var x = data.albums.length;
    for(var i=0; i<x; i++){
      displayAlbum(data.albums[i]);
    }
  }

  function displayAlbum(){
    var $div = $('<div>');
    var $title = $('<div>');
    var img;
    console.log(img);
    $div.addClass('album');
    $title.addClass('title');
  }

  function nada(){}

})();

