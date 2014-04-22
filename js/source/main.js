(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('body').keydown(arrows);
  }

  var pacman;
  var pellet;
  var x;
  var y;
  var a;
  var b;

  function start(){
    placePM();
    placePellet();
  }

  function placePM(){
    x = Math.floor(Math.random() * 2);
    y = Math.floor(Math.random() * 3);
    pacman = $('td[data-x = '+ x +'][data-y = '+ y +']');
    pacman.addClass('pacman');
  }

  function placePellet(){
    a = Math.floor(Math.random() * 2);
    b = Math.floor(Math.random() * 3);
    pellet = $('td[data-x = '+ a +'][data-y = '+ b +']');
    pellet.addClass('pellet');
  }

  function arrows(event){
    switch(event.keyCode){
      case 38:
        y--;
        break;
      case 40:
        y++;
        break;
      case 37:
        x--;
        break;
      case 39:
        x++;
    }
    move();
    win();

    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
      event.preventDefault();
    }
  }

  function move(){
    $('.pacman').removeClass();
    return $('td[data-x='+ x +'][data-y='+ y +']').addClass('pacman');
  }

  function win(){
    if($('td').hasClass('pellet pacman')){
      alert('You won the game!');
    }
  }

})();
