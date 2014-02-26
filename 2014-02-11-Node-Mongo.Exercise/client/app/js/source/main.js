/* jshint unused:false */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getExercises();
    $('#createExercise').click(createExercise);
  }

  function queryExercise(){
    var name = $('#names').val();
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises/';
    url += name;
    $.getJSON(url, displayExercises);
  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var calories = $('#calories').val();
    var date = $('#date').val();
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    var options = {};
    options.url = url;
    options.type = 'POST';
    options.data = {name:name, time:time, calories:calories, date:date};
    options.success = exerciseCreated;
    $.ajax(options);
  }

  function exerciseCreated(exercise){
    displayExercise(exercise);
  }

  function getExercises(){
    var url = window.location.origin.replace(/3000/, '4000');
    url += '/exercises';
    console.log(url);
    $.getJSON(url, displayExercises);
  }

  function dropDown(){
    $('td:first-child').css('color', 'red');
    var opt = _.uniq($('td'));
    for(var i=0; i<opt.length; i++){
      $('#dropDown').append(opt[i].value);
      console.log(opt[i]);
    }
  }

  function displayExercises(data){
    $('#exercises > tbody').empty();
    for(var i=0; i<data.exercises.length; i++){
      displayExercise(data.exercises[i]);
    }
  }

  function displayExercise(exercise){
    addExerciseToSelect(exercise);
      var $row = $('<tr>');
      var $name = $('<td>');
      var $time = $('<td>');
      var $calories = $('<td>');
      var $date = $('<td>');

      $name.text(exercise.name);
      $time.text(exercise.time);
      $calories.text(exercise.calories);
      $date.text(exercise.date);

      $($row).append($name, $time, $calories, $date);
      $('#exercises > tbody').prepend($row);
    }
  }

  function addExerciseToSelect(exercise){
    var isFound = _.any(exercises, function(e){return e.name === exercise.name;});
    if(!isFound){
      exercises.push(exercise);
      $('#names').append('<option value="'+exercise.name+'">'+exercise.name+'</option>');
  }

})();
