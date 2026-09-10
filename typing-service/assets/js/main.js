
const backTop=document.getElementById("backTop");
if(backTop){window.addEventListener("scroll",()=>backTop.style.display=window.scrollY>350?"grid":"none");backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));}
const contactForm=document.getElementById("contactForm");
if(contactForm){contactForm.addEventListener("submit",(e)=>{e.preventDefault();document.getElementById("formMessage").innerHTML='<div class="alert alert-success">Thank you! Your message has been received. We will contact you soon.</div>';contactForm.reset();});}


// Assistance popup form
document.addEventListener('DOMContentLoaded', function(){
  const form=document.getElementById('assistanceForm');
  if(form){form.addEventListener('submit', function(e){e.preventDefault(); const name=form.elements.name.value; alert('Thank you, '+name+'! Your assistance request has been received. Our team will contact you shortly.'); form.reset(); const modal=bootstrap.Modal.getInstance(document.getElementById('assistanceModal')); if(modal) modal.hide();});}
});

// Premium logo preloader
window.addEventListener('load', function () {
  const preloader = document.getElementById('site-preloader');
  if (preloader) {
    setTimeout(function(){
      preloader.classList.add('loaded');
      setTimeout(function(){ preloader.remove(); }, 650);
    }, 350);
  }
});
