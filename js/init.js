(function($){
  $(function(){
    $('.button-collapse').sideNav();
    smoothScroll();
    elementPreloader();
    $.get( "https://api.github.com/users/freeqaacademy/repos", function( data ) {
      $(data).each(function(index, element){
        elementCard(element.name, element.description, element.html_url);
      })
      $('#loader').html('');
    });
  });
})(jQuery);

function elementPreloader() {
  $('#loader').html('<div class="col s12 m12 center"><div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div>');
}

function elementCard(name, description, url){
  $('#repos').append(
    '<div class="col s12 m6"><div class="card blue-grey darken-1"><div class="card-content white-text"><span class="card-title">'+ name +'</span><p>'+ description +'</p></div><div class="card-action"><a target="_blank" href="'+ url +'">Repositório</a></div></div></div>');
}

function smoothScroll() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  
  });
}