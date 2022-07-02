$(".navbar_list ul li a").click(function(){
  $(".navbar_list ul li a").removeClass("active");
  $(this).addClass("active");
  $("section").removeClass('section-show');
  $($(this).attr('href')).addClass('section-show');
  if($(this).attr('href') != '#header'){
    $("header").addClass('header-top');
  }else{
    $("header").removeClass('header-top');
  }
});