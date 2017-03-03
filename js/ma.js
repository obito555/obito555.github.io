$(document).ready(function(){
  $(.mobile_menu).click(function(){
    $(.pop).addClass(active_menu)

  });
  $(.pop_off).click(function(){

     $(.pop).removeClass(active_menu)
  });
    
});
alert('hello');