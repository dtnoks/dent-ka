/* ============================================================
   DENT-KA — OBVESTILO O ZAPRTJU / CLOSED NOTICE BANNER
   ============================================================
   To control the banner, edit ONLY the settings block below.
   You never need to touch the HTML files again.

   - Turn ON:   set  enabled: true
   - Turn OFF:  set  enabled: false
   - Change the dates / text: edit the lines marked below.

   Dates use the format  "YYYY-MM-DD"  (year-month-day),
   e.g. 24 July 2026  ->  "2026-07-24"
   ============================================================ */

var BANNER = {

  // MASTER SWITCH — true = show banner, false = hide it
  enabled: true,

  // OPTIONAL AUTO-SCHEDULE
  // If true, the banner only appears between `from` and `to` (inclusive)
  // and disappears automatically afterwards — so you can set it in advance.
  // If false, the banner shows whenever `enabled` is true (ignores dates).
  autoSchedule: false,

  from: "2026-07-15",   // first closed day  (used only if autoSchedule: true)
  to:   "2026-07-29",   // last closed day   (used only if autoSchedule: true)

  // TEXT SHOWN IN THE BANNER — edit freely
  title:   "Ordinacija zaprta",
  message: "Med 25. 6. in 6. 7. 2026 smo na dopustu. Hvala za razumevanje in se vidimo kmalu.",

};

/* ============================================================
   Below this line is the machinery — no need to edit it.
   ============================================================ */
(function () {
  function show() {
    if (!BANNER.enabled) return false;
    if (!BANNER.autoSchedule) return true;
    var now = new Date();
    var start = new Date(BANNER.from + "T00:00:00");
    var end = new Date(BANNER.to + "T23:59:59");
    return now >= start && now <= end;
  }

  function build() {
    if (!show()) return;

    var css = ''
      + '@keyframes dkDrop{from{transform:translateY(-100%);}to{transform:translateY(0);}}'
      + '#dk-banner{position:fixed;top:0;left:0;right:0;z-index:300;'
      + 'background:#4E7A60;color:#FFFFFF;'
      + "font-family:'DM Sans',sans-serif;line-height:1.45;"
      + 'border-bottom:3px solid #C4956A;'
      + 'box-shadow:0 6px 26px rgba(0,0,0,0.20);'
      + 'animation:dkDrop 0.5s ease;}'
      + '#dk-banner .dk-inner{max-width:900px;margin:0 auto;'
      + 'padding:1.2rem 3.4rem;display:flex;flex-direction:column;'
      + 'align-items:center;justify-content:center;gap:0.3rem;text-align:center;}'
      + "#dk-banner .dk-title{font-family:'Playfair Display',serif;"
      + 'font-size:1.4rem;font-weight:600;letter-spacing:0.01em;}'
      + '#dk-banner .dk-title::before{content:"\\1F33F";margin-right:0.5rem;}'
      + '#dk-banner .dk-msg{font-size:1.04rem;opacity:0.96;max-width:680px;}'
      + '#dk-banner .dk-close{position:absolute;top:0.7rem;right:1rem;'
      + 'background:none;border:none;color:#FFFFFF;'
      + 'font-size:1.7rem;line-height:1;cursor:pointer;opacity:0.85;'
      + 'padding:0.2rem 0.5rem;}'
      + '#dk-banner .dk-close:hover{opacity:1;}'
      + '@media(max-width:768px){#dk-banner .dk-inner{padding:1.05rem 2.8rem;}'
      + '#dk-banner .dk-title{font-size:1.2rem;}'
      + '#dk-banner .dk-msg{font-size:0.94rem;}}';

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.id = 'dk-banner';
    bar.setAttribute('role', 'status');
    bar.innerHTML =
      '<div class="dk-inner">'
      + '<span class="dk-title"></span>'
      + '<span class="dk-msg"></span>'
      + '</div>'
      + '<button class="dk-close" aria-label="Zapri obvestilo">&times;</button>';
    bar.querySelector('.dk-title').textContent = BANNER.title;
    bar.querySelector('.dk-msg').textContent = BANNER.message;
    document.body.appendChild(bar);

    var nav = document.querySelector('nav');

    function offset() {
      var h = bar.offsetHeight;
      document.body.style.paddingTop = h + 'px';
      if (nav && getComputedStyle(nav).position === 'fixed') {
        nav.style.top = h + 'px';
      }
    }
    function reset() {
      document.body.style.paddingTop = '';
      if (nav) nav.style.top = '';
    }

    offset();
    window.addEventListener('resize', offset);

    bar.querySelector('.dk-close').addEventListener('click', function () {
      bar.remove();
      reset();
      window.removeEventListener('resize', offset);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
