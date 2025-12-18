document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.getElementById('navToggle');
  var nav=document.getElementById('nav');
  toggle&&toggle.addEventListener('click',function(){
    if(nav.style.display==='block'){nav.style.display=''}else{nav.style.display='block'}
  });

  var form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var data=new FormData(form);
      alert('Thanks, '+(data.get('name')||'')+"! We'll get back to you at "+(data.get('email')||''));
      form.reset();
    });
  }
});
