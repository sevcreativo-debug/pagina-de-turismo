/* =========================================================
   VIAJES ANGEL — comportamiento general del sitio
   ========================================================= */

/* ---------- Pantalla de carga ---------- */
(function loaderInit(){
  document.body.classList.add('is-loading');
  window.addEventListener('load', function(){
    const loader = document.getElementById('loader');
    if(!loader) { document.body.classList.remove('is-loading'); return; }
    setTimeout(function(){
      loader.classList.add('hide');
      document.body.classList.remove('is-loading');
      document.body.classList.add('loaded');
    }, 1200);
  });
  // Fallback safety net in case 'load' never fires quickly (cached assets etc.)
  setTimeout(function(){
    const loader = document.getElementById('loader');
    if(loader && !loader.classList.contains('hide')){
      loader.classList.add('hide');
      document.body.classList.remove('is-loading');
    }
  }, 3500);
})();

/* ---------- Header on scroll ---------- */
const header = document.querySelector('.site-header');
function onScrollHeader(){
  if(!header) return;
  if(window.scrollY > 30) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  const totop = document.querySelector('.totop');
  if(totop){
    if(window.scrollY > 500) totop.classList.add('show');
    else totop.classList.remove('show');
  }
}
document.addEventListener('scroll', onScrollHeader, {passive:true});
onScrollHeader();

/* ---------- Mobile nav ---------- */
const burger = document.querySelector('.burger');
const mainNav = document.querySelector('.main-nav');
const overlay = document.querySelector('.nav-overlay');
if(burger && mainNav){
  burger.addEventListener('click', function(){
    mainNav.classList.toggle('open');
    if(overlay) overlay.classList.toggle('show');
  });
}
if(overlay){
  overlay.addEventListener('click', function(){
    mainNav.classList.remove('open');
    overlay.classList.remove('show');
  });
}

/* ---------- Active nav link ---------- */
(function setActive(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a[href]').forEach(function(a){
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
(function reveal(){
  const items = document.querySelectorAll('[data-reveal]');
  if(!items.length) return;
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry, i){
      if(entry.isIntersecting){
        const delay = entry.target.getAttribute('data-delay') || (i * 60);
        setTimeout(function(){ entry.target.classList.add('in'); }, delay);
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.15, rootMargin:'0px 0px -60px 0px'});
  items.forEach(function(el){ io.observe(el); });
})();

/* ---------- Animated counters ---------- */
(function counters(){
  const els = document.querySelectorAll('[data-count]');
  if(!els.length) return;
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      let cur = 0;
      const step = Math.max(target / 60, 0.5);
      const tick = function(){
        cur += step;
        if(cur >= target){ el.textContent = target + suffix; return; }
        el.textContent = Math.floor(cur) + suffix;
        requestAnimationFrame(tick);
      };
      tick();
      io.unobserve(el);
    });
  }, {threshold:.5});
  els.forEach(function(el){ io.observe(el); });
})();

/* ---------- FAQ Accordion ---------- */
document.querySelectorAll('.acc-q').forEach(function(q){
  q.addEventListener('click', function(){
    const item = q.closest('.acc-item');
    const answer = item.querySelector('.acc-a');
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.acc-item').forEach(function(other){
      other.classList.remove('open');
      other.querySelector('.acc-a').style.maxHeight = null;
    });
    if(!wasOpen){
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/* ---------- Back to top ---------- */
const totopBtn = document.querySelector('.totop');
if(totopBtn){
  totopBtn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

/* ---------- Hero parallax (subtle) ---------- */
(function parallax(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  window.addEventListener('scroll', function(){
    const y = window.scrollY;
    if(y < window.innerHeight){
      hero.style.backgroundPosition = 'center ' + (y * 0.35) + 'px';
    }
  }, {passive:true});
})();

/* ---------- Tilt effect on hero card ---------- */
(function tilt(){
  const card = document.querySelector('.hero-card');
  if(!card) return;
  card.addEventListener('mousemove', function(e){
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = 'rotate(' + (2 + x*6) + 'deg) translateY(' + (y*-8) + 'px)';
  });
  card.addEventListener('mouseleave', function(){
    card.style.transform = '';
  });
})();
