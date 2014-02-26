(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#create').click(create);
  }

  function create(){
    var name = $('#txtName').val();
    var gender = $('#txtGender').val();
    var age = $('#txtAge').val();
    var species = $('select').val();
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000');
    url += '/animal?species='+species+'&name='+name+'&gender='+gender+'&age='+age+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

})();

