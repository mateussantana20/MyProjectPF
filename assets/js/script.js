$( function() {

  $('.mobile h3').click(function(){
    $('.mobile ul').slideToggle();
  })

  $(document).ready(function() {
    var colors = ["#f9f9f9", "#43487a"];//Array com as cores, pode adicionar contas quiser
    var i = 0;
    setInterval(function(){
      $('.banner h2').css('color', colors[i]);
      i = (i == (colors.length -1)) ? 0 : i+1;
    },1000);//10 Segundos em Milisegundos
});


} )
