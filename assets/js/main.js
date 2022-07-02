const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
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

$(".mobile-nav-toggle").on('click', function(e) {
  select('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')
});