
//global variables   
var testingIGuess


//this is for the date picker


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

  //modal //

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message')
    modal.find('.modal-body input').val(recipient)

    $('#message-text').val('')
  })
  //posting modal data to page
=======
    
  })

  function modalPost() {
    titleBox = $.trim($("#title-name").val());
    messageBox = $.trim($("#message-text").val());
    dateBox =  $.trim($("#date").val());
    
    console.log(titleBox)
    console.log(messageBox)

    // images for posted modal data.
  postNoteImageArray= [
    './assets/img/flatgreen.png', 
    './assets/img/flatblue.png',
    './assets/img/flatdarkblue.png',
    './assets/img/flatgreen.png',
    './assets/img/flatorange.png',
    './assets/img/flatpink.png',
    './assets/img/flatyellow.png'
  ];
  //randomizer 
  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
  

    stickyForPost = postNoteImageArray.random()
    $('#formOutput').append(`<div id='postedForm' class="ui-widget-content" style="background-image: url('${stickyForPost}'); height:250px; width:250px;" > <h1> ${titleBox} </h1> <p> ${dateBox}</p> <p> ${messageBox} </p> </div>`)
    

  }
  //draggable function
//   $.fn.draggable = function(){
//     var $this = this,
//     ns = 'draggable_'+(Math.random()+'').replace('.',''),
//     mm = 'mousemove.'+ns,
//     mu = 'mouseup.'+ns,
//     $w = $(window),
//     isFixed = ($this.css('position') === 'fixed'),
//     adjX = 0, adjY = 0;

//     $this.mousedown(function(ev){
//         var pos = $this.offset();
//         if (isFixed) {
//             adjX = $w.scrollLeft(); adjY = $w.scrollTop();
//         }
//         var ox = (ev.pageX - pos.left), oy = (ev.pageY - pos.top);
//         $this.data(ns,{ x : ox, y: oy });
//         $w.on(mm, function(ev){
//             ev.preventDefault();
//             ev.stopPropagation();
//             if (isFixed) {
//                 adjX = $w.scrollLeft(); adjY = $w.scrollTop();
//             }
//             var offset = $this.data(ns);
//             $this.css({left: ev.pageX - adjX - offset.x, top: ev.pageY - adjY - offset.y});
//         });
//         $w.on(mu, function(){
//             $w.off(mm + ' ' + mu).removeData(ns);
//         });
//     });

//     return this;
// };

=======
    $('#formOutput').append(`<div> <h1> ${titleBox} </h1> <p> ${dateBox}</p> <p> ${messageBox} </p> </div>`)
  }

