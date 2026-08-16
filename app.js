// Double Six Group — shared behaviour
(function(){
  // mobile nav
  var btn = document.getElementById('menuBtn');
  var links = document.getElementById('navLinks');
  if(btn && links){
    btn.addEventListener('click', function(){ links.classList.toggle('open'); });
    links.addEventListener('click', function(e){ if(e.target.closest('a')) links.classList.remove('open'); });
  }

  // hero pip reveal → settle into double six
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var d1 = document.getElementById('die1'), d2 = document.getElementById('die2');
  if(d1 && d2){
    if(reduce){ d1.classList.add('lit'); d2.classList.add('lit'); }
    else {
      d1.querySelectorAll('span').forEach(function(s,i){ s.style.transitionDelay = (0.15*i+0.3)+'s'; });
      d2.querySelectorAll('span').forEach(function(s,i){ s.style.transitionDelay = (0.15*i+1.1)+'s'; });
      setTimeout(function(){ d1.classList.add('lit'); d2.classList.add('lit'); }, 250);
    }
  }

  // scroll reveal
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){ e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:.14, rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e,i){ e.style.transitionDelay = ((i%4)*0.06)+'s'; io.observe(e); });
})();
