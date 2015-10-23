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
   
        //if focus in textfield for city, o will not make comments show //addition
        if(!$('#cityfield').is(':focus')) {
             //made improvments so it can toggle
            $('.current').children('.description').toggle();
        }
    }

    else if(event.which === 110) {
      var currentArticle = $('.current');
      
      
      
      //will not change current article with 'n' key if focus on textfield for city
      //added feature
      if(!$('#cityfield').is(':focus')) {
          //improved code to loop back around to beginning
          var nextArticle = '';
          
          if(currentArticle.attr("id") != $('#last').attr("id")) {
            nextArticle = currentArticle.next();
          }
          else {
            nextArticle = $('#first');
          }
          
          currentArticle.removeClass('current');
          nextArticle.addClass('current');
      }
      
      
      
      
    }
  });
}

$(document).ready(main);