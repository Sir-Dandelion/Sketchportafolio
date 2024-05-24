const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})

sr.reveal(`.profile__border`,{delay:50})
sr.reveal(`.profile__name`,{delay:100})
sr.reveal(`.profile__profession`,{delay:150})
sr.reveal(`.profile__social`,{delay:200})
sr.reveal(`.profile__info-group`,{interval:50,delay:250})
sr.reveal(`.profile__buttons`,{delay:250})
sr.reveal(`.tag__name`,{delay:350})
sr.reveal(`.projects__content`,{interval:50 , delay:50})
sr.reveal(`.skills__area`,{interval:10 , delay:10})

var profile__border = document.getElementById("profile__border");

profile__border.onclick = function(){document.body.classList.toggle("dark-theme");

}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}