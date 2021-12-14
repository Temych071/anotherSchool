$(function () {

    $('.course__skill-1').on('click', function(){
      $('.about').toggleClass('about--active');
    });

    $('.vertical__item').on('click', function(){
      
      console.log($(this.querySelector('.vertical__subitems')).hasClass('vertical--active'));
      
      if($(this.querySelector('.vertical__subitems')).hasClass('vertical--active')) {
        $(this.querySelector('.vertical__subitems')).toggleClass('vertical--active');
        $(this.querySelector('.vertical__subitems')).slideUp();
        
      }
      else {
        $(this.querySelector('.vertical__subitems')).slideDown();
        $(this.querySelector('.vertical__subitems')).toggleClass('vertical--active');
        
      }

      
    });
/*
    $( ".vertical__item" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
	    $( "div" ).slideUp(); // плавно скрываем все элементы <div>
	  });
	  $( ".show" ).click(function(){ // задаем функцию при нажатиии на элемент с классом show
	    $( "div" ).slideDown(); // плавно отображаем все элементы <div>
	  });
*/

});