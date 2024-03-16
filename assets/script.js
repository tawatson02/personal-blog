$(function(){
    $('.switch').click(function(){
        $('.backcolor').toggleClass('dark-mode');
        
    })
});


function changeForm(event, currentFormId, nextFormId) {
	event.preventDefault();
  let currentForm = document.getElementById(currentFormId);
  currentForm.classList.replace("visable", "hidden");
  currentForm.classList.add("mainContainerHidden");
  
  let nextForm = document.getElementById(nextFormId);
  nextForm.classList.replace("hidden", "visable");
  nextForm.classList.remove("mainContainerHidden");
	return false;
}
