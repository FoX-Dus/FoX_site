$(document).ready(function () {
    svg4everybody({});
});

// Lang switch
var arrLang = {
  'en': {
    'main' : 'Main',
    'about' : 'About',
    'contact' : 'Contact',
    'send' : 'Send'
  },
  'ru' : {
    'main' : 'Главная',
    'about' : 'О компании',
    'contact' : 'Контакты',
    'send' : 'Отправить'
  }
};

$(function(){
  $('.translate').on('click', function(){
    var lang = $(this).attr('id');
    
    $('.lang').each(function(index, el){
      $(this).text(arrLang[lang][$(this).attr('key')])
    });
  });
});
// End of Lang switch

// Menu app
function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
// myMenu.addEventListener("click", toggleClassMenu, false);

$('.menu-icon').click(function(){
  $(this).toggleClass('shown')
})

// Menu button stilization
$('.nav_a').on('click', function(){
  $('.nav_a').removeClass('nav_active');
  $(this).addClass('nav_active');
  });
// -----------------------

// popup forms
$('.show_popup').click(function(){
  $('.popup').addClass('visible')
})

$("body").click(function(e){
  var closeClassList = ['popup_bg', 'close_icon', 'svg-inline--fa'];
//   TODO repair close icon classList[0] 
  if(!closeClassList.includes(e.target.classList[0]))return true
  console.log(e.target.classList);
   $('.popup').removeClass('visible')  
})

//Send form data
$('form').submit((e) => {
  e.preventDefault();

  let formData = $('form').serialize();

  $.ajax({
    type: 'POST',
    url: $('form').attr('action'),
    data: formData,
    success: (xhr, statusCode, textStatus) => { console.log(textStatus.status) },
    complete: (xhr, statusCode, textStatus) => { console.log(xhr.status) } 
  });
});


// -----------------------------