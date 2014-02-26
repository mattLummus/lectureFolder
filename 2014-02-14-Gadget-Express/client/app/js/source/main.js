/* jshint unused:false */
(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#userForm').submit(submitUser);
    $('#gadgetForm').submit(submitGadget);
    $('#gadgets').on('change', '.selU', updateQ);
    $('#gadgets').on('click', '.fButton', checkOut);
    loadUsers();
  }

  var userList;

  function checkOutSend(idU,idG,nameU,nameG,balance,products,cost,quantity,available){
    var bal = balance - (cost*quantity);
    var quant = available-quantity;
    checkOutUser(idU,nameU,bal,products);
    checkOutGadget(idG,nameG,cost,quant);
  }

  function  checkOutUser(id,name, balance, products){
    var data = {name:name,balance:balance,products:products};
    var url = window.location.origin.replace(/3000/, '4000')+'/users/'+id;
    var type = 'PUT';
    var success = postCheckOut;
    console.log(data);
    $.ajax({url:url, data:data, type:type});
  }

  function checkOutGadget(id,name,cost,quantity){
    var data = {name:name,cost:cost,quantity:quantity};
    var url = window.location.origin.replace(/3000/, '4000')+'/gadgets/'+id;
    var type = 'PUT';
    var success = postCheckOut;
    $.ajax({url:url, data:data, type:type});
  }

  function postCheckOut(){
    console.log('You bought something!');
  }

  function checkOut(){
    var row = $(this).parent().parent();
    var cost = parseFloat(row[0].cells[2].textContent);
    var nameG = row[0].cells[1].textContent;
    var idG = $('.'+nameG).attr('data-id');
    var selQ = $(row[0].cells[5]).closest('select').context.lastChild;
    var quant = $(selQ).val();
    var selU = $(row[0].cells[4]).closest('select').context.lastChild;
    var nameU = $(selU).val();
    var idU = $('.'+nameU).attr('data-id');
    var balance = parseFloat($('.'+nameU)[0].cells[1].textContent);
    var prod = $('.'+nameU)[0].cells[2].textContent;
    var name = parseFloat(row[0].cells[1].textContent);
    var available = parseInt(row[0].cells[3].textContent);
    var products = [];
    products.push(prod);
    for(var i=0; i<quant; i++){
      products.push(nameG);
    }
    console.log(products);
    checkOutSend(idU,idG,nameU,nameG,balance,products,cost,quant,available,products);
    event.preventDefault();
  }

  function updateQ(){
    $('.selQ').empty();
    var row = $(this).parent().parent();
    var cost = parseFloat(row[0].cells[2].textContent);
    var available = parseInt(row[0].cells[3].textContent);
    var user = $(this).val();
    var balance = parseFloat($('.'+user)[0].cells[1].textContent);
    var max = Math.floor(balance/cost);
    var sel = $(row[0].cells[5]).closest('select').context.lastChild;
    if(max>available){
      max = available;
    }
    for(var i=1; i<=max; i++){
      var $opt = $('<option>');
      $opt.text(i);
      $(sel).append($opt);
    }
  }

  function submitUser(){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/3000/, '4000') + '/users';
    var type = 'POST';
    var success = newUser;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function submitGadget(){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/3000/, '4000') + '/gadgets';
    var type = 'POST';
    var success = newGadget;
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function newUser(user){
    $('#userForm input').val('');
    alert('New User!');
  }

  function newGadget(gadget){
    $('#gadgetForm input').val('');
    alert('New Gadget!');
  }

  function loadUsers(){
    var url = window.location.origin.replace(/3000/, '4000');
    $.getJSON(url+'/users', displayUsers);
  }

  function loadGadgets(){
    var url = window.location.origin.replace(/3000/, '4000');
    $.getJSON(url+'/gadgets', displayGadgets);
  }

  function displayUsers(data){
    loadGadgets();
    userList = data.users;
    for(var i=0; i<data.users.length; i++){
      displayUser(data.users[i]);
    }
  }

  function displayGadgets(data){
    for(var i=0; i<data.gadgets.length; i++){
      displayGadget(data.gadgets[i]);
    }
  }

  function displayUser(data){
    var $row = $('<tr>');
    var $user = $('<td>');
    var $balance = $('<td>');
    var $products = $('<td>');

    $user.text(data.name);
    $balance.text(data.balance);
    $products.text(data.products.join(', '));
    $($row).addClass(data.name);
    $($row).attr('data-id', data._id);
    $($row).append($user, $balance, $products);
    $('#users').append($row);
  }

  function displayGadget(data){
    var $row = $('<tr>');
    var $purchase = $('<td>');
    var $gadget = $('<td>');
    var $cost = $('<td>');
    var $available = $('<td>');
    var $users = $('<td>');
    var $quantity = $('<td>');
    var $finalize = $('<td>');

    var $purchaseButton = $('<button>');
    $purchaseButton.css('display', 'none');
    var $finalizeButton = $('<button>');
    var $selUsers = $('<select>');
    var $selQuantity = $('<select>');
    $purchaseButton.text('Purchase');
    $purchaseButton.addClass('tiny');
    $purchaseButton.addClass('pButton');
    $purchase.append($purchaseButton);
    $finalizeButton.text('Check Out');
    $finalizeButton.addClass('tiny');
    $finalizeButton.addClass('fButton');
    $finalize.append($finalizeButton);
    $selUsers.addClass('selU');
    $selUsers.addClass('selU-' + data.name);
    $users.append($selUsers);
    $selQuantity.addClass('selQ');
    $quantity.append($selQuantity);
    var tempOpt = $('<option>');
    tempOpt.text('Pick One');
    $selUsers.append(tempOpt);
    for(var i=0; i<userList.length; i++){
      var tempOption = $('<option>');
      var tempUser = userList[i];
      tempOption.text(tempUser.name);
      tempOption.addClass('uOption');
      $selUsers.append(tempOption);
    }

    $gadget.text(data.name);
    $gadget.attr('data-id', data._id);
    $gadget.addClass(data.name);
    $cost.text(data.cost);
    $cost.data('name', data.name+' cost');
    $cost.data('name', data.cost);
    $available.text(data.quantity);
    $available.data('name', data.name+' available');
    $available.data('name', data.available);
    $($row).append($purchase, $gadget, $cost, $available, $users, $quantity, $finalize);
    $('#gadgets').append($row);
  }

//KEEP
/*
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
*/

})();
