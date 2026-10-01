
const backTop=document.getElementById("backTop");
if(backTop){window.addEventListener("scroll",()=>backTop.style.display=window.scrollY>350?"grid":"none");backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));}
const contactForm=document.getElementById("contactForm");
if(contactForm){contactForm.addEventListener("submit",(e)=>{e.preventDefault();document.getElementById("formMessage").innerHTML='<div class="alert alert-success">Thank you! Your message has been received. We will contact you soon.</div>';contactForm.reset();});}


// Premium assistance popup form
document.addEventListener('DOMContentLoaded', function(){
  const form=document.getElementById('assistanceForm');
  const success=document.getElementById('assistanceSuccess');
  const modalEl=document.getElementById('assistanceModal');
  if(form && success){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!form.checkValidity()){ form.reportValidity(); return; }
      form.style.display='none';
      success.style.display='block';
    });
  }
  if(modalEl){
    modalEl.addEventListener('hidden.bs.modal', function(){
      if(form){ form.reset(); form.style.display='block'; }
      if(success){ success.style.display='none'; }
    });
  }
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
