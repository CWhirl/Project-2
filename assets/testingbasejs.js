$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  })
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message')
    modal.find('.modal-body input').val(recipient)
    
  })
  function modalPost() {
    titleBox = $.trim($("#title-name").val());
    messageBox = $.trim($("#message-text").val());
    dateBox =  $.trim($("#date").val());
    
    console.log(titleBox)
    console.log(messageBox)
    $('#formOutput').append(`<div> <h1> ${titleBox} </h1> <p> ${dateBox}</p> <p> ${messageBox} </p> </div>`)
  }
