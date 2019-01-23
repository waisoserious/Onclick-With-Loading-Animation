	$('#gs-stream').click(function(){
      $('#gs-stream').hide();
      $('.load').addClass('gs-loading');
        setTimeout(function () { 
        $('.load').removeClass('gs-loading');
        $('#mvs-stream').show();

      }, 2000);
    });
