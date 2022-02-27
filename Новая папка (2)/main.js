
$('#show').on('click', function(){
    var passInput=$('#Input');
    if(passInput.attr('type')==='password')
    {
        passInput.attr('type','text');
    }else{
          passInput.attr('type','password');
    }
})


  
function myFunction() {
    var checkBox = $('#checkbox');
    var btn = $('#btnSubmit');
    if (checkBox.is(':checked')){
      btn.removeAttr('disabled');
    } else {
        btn.attr('disabled','');
    }
}

function scrollToTop() {
    $(window).scrollTop(0);
    setTimeout(timer,1000);
}

$('.bgImage').css('background-image',
 'url("1.jpg")');

$('.bgImage').css({'background-size': 'cover', 'background-position': 'center center'});
   
var max_length = 15;
$('textarea').keyup(function () {
    var len = max_length - $(this).val().length;
    $('#remaining').text(len);
});

$( 'p' ).click(function() {
    $( this ).fadeTo( 'slow', 0.5 );
  });

$('#btn1').click(function() {
    $('#box').css({'width':'200px','height': '200px' });
});
$('#btn2').click(function() {
    $('#box').css({'width':'100px','height': '100px' });
});