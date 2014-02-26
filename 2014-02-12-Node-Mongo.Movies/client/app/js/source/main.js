/* jshint unused:false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#movie').submit(submitMovie);
    $('#arm').click(deleteArm);
    $('#movieList').on('click', '.deleteX', deleteMovie);
    $('#movieList').on('click', '.editX', editMovie);
    $('#searchButton').click(searchMovies);
    loadMovies();
    $('#save').hide();
  }

  var tempID;

  function searchMovies(){
    var search = $('#searchText').val();
    console.log(search);
    //$('.movieItem').hide();
    //$('.movieIem:contains('+search+')').show();

  }

  function submitMovie(){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    var type;
    var success;

    if(($('#create').css('display')) === 'none'){
      url = url+'/'+tempID;
      type = 'PUT';
      success = refreshMovie;
      $.ajax({url:url, type:type, data:data, success:success});
    }
    else{
      type = 'POST';
      success = newMovie;
      $.ajax({url:url, type:type, data:data, success:success});
    }

    event.preventDefault();
  }

  function newMovie(movie){
    $('#movie input').val('');
    displayMovie(movie);
  }

  function loadMovies(){
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){
    for(var i=0; i<data.movies.length; i++){
      displayMovie(data.movies[i]);
    }
  }

  function displayMovie(movie){
    var $table = $('<table>');
    var $div = $('<div>');
    var tname = $('<tr>');
    var trating = $('<tr>');
    var tlength = $('<tr>');
    var tyear = $('<tr>');
    var tstudio = $('<tr>');
    var tactors = $('<tr>');
    var tdirector = $('<tr>');
    var $poster = $('<div>');
    var $name = $('<td>');
    var $rating = $('<td>');
    var $length = $('<td>');
    var $year = $('<td>');
    var $studio = $('<td>');
    var $actors = $('<td>');
    var $director = $('<td>');
    $name.text('Title: '+movie.name);
    $rating.text('Rating: '+movie.rating);
    $length.text('Length: '+movie.length);
    $year.text('Year: '+movie.year);
    $studio.text('Studio: '+movie.studio);
    var act = movie.actors.join(', ');
    $actors.text('Actors: '+act);
    $director.text('Director: '+movie.director);
    $poster.css('background-image', 'url('+movie.poster+')');
    $poster.addClass('poster');
    $name.addClass('td');
    $rating.addClass('td');
    $length.addClass('td');
    $year.addClass('td');
    $studio.addClass('td');
    $actors.addClass('td');
    $director.addClass('td');
    $table.addClass('div');
    $poster.addClass('div');
    var $X = $('<div>');
    $X.addClass('deleteX');
    $X.text('X');
    $X.attr('data-id', movie._id);
    $div.attr('data-id', movie._id);
    $div.attr('data-name', movie.name);
    $div.addClass('movieItem');
    $X.attr('data-name', movie.name);
    $($poster).append($X);
    $X.hide();
    var $E = $('<div>');
    $E.addClass('editX');
    $E.text('Edit');
    $E.attr('data-id', movie._id);
    $E.attr('data-name', movie.name);
    $($poster).append($E);
    $E.hide();

    $table.append(tname, trating, tlength, tyear, tstudio, tactors, tdirector);
    tname.append($name);
    trating.append($rating);
    tlength.append($length);
    tyear.append($year);
    tstudio.append($studio);
    tactors.append($actors);
    tdirector.append($director);
    $('#movieList').prepend($div);
    $($div).prepend($table);
    $($div).prepend($poster);
  }

  function refreshMovie(movie){
    deleteArm();
    showSave();
    $('#movie input').val('');
    console.log(movie);
  }

  function deleteArm(){
    $('.deleteX').toggle();
    $('.editX').toggle();
    event.preventDefault();
  }

  function deleteMovie(){
    var mov = $(this);
    var mID = mov.attr('data-id');
    var mName = mov.attr('data-name');
    console.log('DELETE');
    console.log(mID);
    console.log(mName);

    //if(confirm('Delete '+
    var url = window.location.origin.replace(/3000/, '4000') + '/movies/' +mID ;
    var type = 'DELETE';

    var success = deleteDisplay(mID);
    $.ajax({url:url, type:type, success:success});
  }

  function deleteDisplay(mID){
    debugger;
    var sel = '[data-id="' +mID+ '"]';
    $(sel).detach();
    deleteArm();
  }

  function editMovie(){
    var mov = $(this);
    var mID = mov.attr('data-id');
    var mName = mov.attr('data-name');
    tempID = mID;
    var url = window.location.origin.replace(/3000/, '4000') + '/movies/' +mID;
    $.getJSON(url, popForm);
  }

  function popForm(movie){
    var mov = movie.movie;
    $('#nameTxt').val(mov.name);
    $('#studioTxt').val(mov.studio);
    $('#ratingTxt').val(mov.rating);
    $('#lengthTxt').val(mov.length);
    $('#yearTxt').val(mov.year);
    $('#actorsTxt').val(mov.actors.join(', '));
    $('#directorTxt').val(mov.director);
    $('#posterTxt').val(mov.poster);
    showSave();
  }

  function showSave(){
    $('#create').toggle();
    $('#save').toggle();
  }

})();

