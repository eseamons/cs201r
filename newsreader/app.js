var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });

  $(document).keypress(function(event) {
    if(event.which === 111) {
    //   $('.description').hide();
    //made improvments so it can toggle
      $('.current').children('.description').toggle();
    }

    else if(event.which === 110) {
      var currentArticle = $('.current');
      
      
      //improved code to loop back around to beginning
      if(currentArticle.attr("id") != $('#last').attr("id")) {
        var nextArticle = currentArticle.next();
      }
      else {
        var nextArticle = $('#first');
      }
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });
}

$(document).ready(main);