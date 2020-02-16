$("[data-toggle=popover]").popover();
$('.carousel').carousel({
    interval: 2000
})
$("#btnShow").click(function(){
  
    $(".alert").hide().show('medium');
  });