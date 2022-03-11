$(document).ready(function () {
$('.click-info').each(function(index) {   
$(this).click(function () {
    $(this).next().slideToggle();
    $(this).next().css('display','inline-block');
      });
    });

  $('.input-padrao').each(function(index) {   
    $(this).focus(function () {
        $(this).prev().css('color','#2A7AE4');
          });
        });
        $('.input-padrao').each(function(index) {   
          $(this).focusout(function () {
              $(this).prev().css('color','#A2A2A2');
            });
         }); 
      });

            

    
             