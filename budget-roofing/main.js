(function () {
  'use strict';
  document.documentElement.classList.add('js');
  document.body.classList.add('js');

  var SERVICES = [
    {
      slug: 'colorbond-roofing', name: 'Colorbond roofing & re-roofs', short: 'Colorbond roofing',
      card: 'New and replacement Colorbond roofs, from corrugated iron upgrades to new-build roofs with intricate details.',
      eyebrow: 'Service · Metal roofing', title: 'Colorbond roofs, <em>fitted properly.</em>',
      intro: 'New-build and replacement Colorbond roofs for Sydney homes, with the straight lines and clean flashings that make a metal roof last.',
      whatTitle: 'A modern metal roof, <em>start to finish.</em>',
      what: ['Colorbond is pre-painted steel roofing used across Sydney for new builds and re-roofs. Budget Roofing installs it on new homes, including roofs with intricate details that need an engineered solution, and replaces old corrugated iron roofs with modern Colorbond.', 'One customer had their corrugated iron roof replaced with a modern Colorbond roof "at a very competitive price", then brought the team back for their outdoor area.'],
      signs: ['Your corrugated iron roof is rusting through or has lifting sheets', 'You are building and need a metal roof with custom details', 'Leaks keep coming back after patch repairs', 'You want to change the colour or modernise the look of the house', 'Old screws and fixings are loose or corroded'],
      steps: [['Inspect & measure', 'Roof pitch, framing, gutters and junctions are checked and measured.'], ['Choose profile & colour', 'Talk through sheet profile, Colorbond colour and flashing details.'], ['Strip & install', 'Old roofing comes off in stages and new sheets are fixed with straight, even screw lines.'], ['Detail & clean up', 'Ridges, flashings and trims finished cleanly, and the rubbish taken away.']],
      related: ['tile-roof-replacement', 'roof-repairs-hail-damage', 'fabrication']
    },
    {
      slug: 'tile-roof-replacement', name: 'Tile roof replacement', short: 'Tile roof replacement',
      card: 'Replacing tired or failing tiled roofs, including tile-to-Colorbond conversions for a lighter, modern roof.',
      eyebrow: 'Service · Re-roofing', title: 'Tile roof <em>replacement.</em>',
      intro: 'When a tiled roof is past repairing, the crew can strip it and replace it, often with a lighter, cleaner Colorbond roof.',
      whatTitle: 'Out with the old tiles, <em>in with a new roof.</em>',
      what: ['Tile roof replacement is one of the jobs customers mention most often. Old concrete or terracotta tiles are removed, the roof frame is checked, and a new roof goes on with new flashings, ridges and gutters as needed.', 'Many Sydney homeowners choose Colorbond when they replace tiles, but the team will talk through options to suit the house.'],
      signs: ['Cracked, porous or slipping tiles across large areas of the roof', 'Ridge capping that keeps cracking or coming loose', 'Repeated leaks or water stains on ceilings', 'Moss and heavy weathering on old concrete tiles', 'You want a lighter roof or a modern look'],
      steps: [['Inspection', 'The roof and frame are inspected to confirm replacement is the right call.'], ['Plan the new roof', 'Choose material, profile and colour, and plan gutters and flashings.'], ['Strip & prepare', 'Tiles are removed and the frame prepared for the new roof.'], ['Install & tidy', 'New roof fitted, detailed and the site cleared of old tiles and offcuts.']],
      related: ['colorbond-roofing', 'asbestos-roof-removal', 'roof-repairs-hail-damage']
    },
    {
      slug: 'asbestos-roof-removal', name: 'Asbestos roof removal', short: 'Asbestos roof removal',
      card: 'Removing old asbestos roofing and replacing it with a new roof, so the job is finished in one project.',
      eyebrow: 'Service · Removal & replacement', title: '"No more <em>asbestos!</em>"',
      intro: 'Old fibro and corrugated cement roofs are common on older Sydney homes. Budget Roofing removes asbestos roofing and puts a new roof on in its place.',
      whatTitle: 'Removal and re-roof, <em>in one job.</em>',
      what: ['Many homes built before the 1990s have roofing that may contain asbestos. In NSW, asbestos removal is regulated work and has to be handled safely. Talk to the office about how removal is managed on your project.', 'Once the old roof is gone, the crew installs the new one. One customer summed it up: "No more asbestos!… Straight screws, perfect cuts, beautiful detailing and they took all their rubbish."'],
      signs: ['Your home has an older fibro or corrugated cement roof', 'The roof sheeting is cracked, brittle or weathered', 'You are renovating and want the old roof gone first', 'You are selling or buying and want peace of mind', 'Guttering or flashings around old sheeting are failing'],
      steps: [['Assess the roof', 'Identify the existing roofing and plan the removal and replacement.'], ['Plan the removal', 'Discuss how removal is carried out and what to expect on the day.'], ['Remove & re-roof', 'Old roofing removed and the new roof installed.'], ['Clean finish', 'Final detailing and a cleared site.']],
      related: ['tile-roof-replacement', 'colorbond-roofing', 'roof-repairs-hail-damage']
    },
    {
      slug: 'roof-repairs-hail-damage', name: 'Hail damage & outdoor area roofs', short: 'Hail damage repairs',
      card: 'Repairs after hail and storm damage, plus pergola and outdoor area roof replacements.',
      eyebrow: 'Service · Repairs', title: 'Hail damage &amp; <em>outdoor roofs.</em>',
      intro: 'Sydney hail can dent, crack and puncture roofing. The crew repairs hail-damaged roofs and replaces pergola and outdoor area roofs.',
      whatTitle: 'Fixing what <em>the storm left.</em>',
      what: ['After a hailstorm, damage often shows up on the lighter roofs first: pergolas, patios and outdoor entertaining areas. Budget Roofing replaces hail-damaged outdoor area roofs as well as repairing main roofs.', 'One customer was "so impressed" with their re-roof that they "had them return to replace a hail damaged outdoor area roof."'],
      signs: ['Dents, cracks or holes in roof sheets or polycarbonate after a storm', 'New leaks or drips after hail', 'An old pergola roof that is sagging, brittle or discoloured', 'Gutters and flashings knocked loose by wind', 'You need photos and a scope of work for your insurer'],
      steps: [['Make safe', 'Stay off the roof and note leaks. Call the office to arrange an inspection.'], ['Inspect', 'Damage is assessed and the repair or replacement scope agreed.'], ['Repair or replace', 'Damaged sheets, pergola roofing or flashings replaced.'], ['Check & clean', 'Work is checked for watertightness and debris removed.']],
      related: ['colorbond-roofing', 'fabrication', 'tile-roof-replacement']
    },
    {
      slug: 'cladding', name: 'Wall & roof cladding', short: 'Cladding',
      card: 'Metal cladding for homes, extensions, commercial and industrial buildings, detailed to match the roof.',
      eyebrow: 'Service · Cladding', title: 'Metal cladding with <em>clean lines.</em>',
      intro: 'Wall and roof cladding for residential, commercial and industrial buildings, fitted by the same crew that does the roof.',
      whatTitle: 'One crew from <em>roof to wall.</em>',
      what: ['Cladding uses metal sheeting on walls as well as roofs, giving a building a durable, low-maintenance skin. It suits contemporary homes and extensions as much as sheds, warehouses and commercial buildings.', 'Because the team also fabricates, corners, junctions and trims can be made to suit, so the cladding and roof read as one clean finish.'],
      signs: ['You are building an extension or new home with metal cladding in the design', 'Old wall sheeting on a shed or workshop is rusting or damaged', 'You want a low-maintenance exterior finish', 'Commercial or industrial walls need re-cladding', 'Junctions between roof and walls are leaking'],
      steps: [['Review the design', 'Plans or the existing building are reviewed and measured.'], ['Select materials', 'Profile, colour and trim details agreed.'], ['Fabricate & fit', 'Custom trims made and the cladding installed.'], ['Finish', 'Junctions sealed, detailing checked and the site cleaned up.']],
      related: ['architectural-traditional', 'fabrication', 'colorbond-roofing']
    },
    {
      slug: 'fabrication', name: 'Custom fabrication', short: 'Fabrication',
      card: 'Flashings, cappings and trims made to suit the roof, so the details fit instead of being forced.',
      eyebrow: 'Service · Fabrication', title: 'Flashings made <em>to fit.</em>',
      intro: 'Fabrication is part of Budget Roofing, not an afterthought. Custom flashings, cappings and trims are made to suit the roof.',
      whatTitle: 'The details that <em>keep water out.</em>',
      what: ['Most roof leaks start at the junctions: where a roof meets a wall, a valley, a parapet or a skylight. Off-the-shelf flashings don\'t always suit, so the team fabricates parts to match the job.', 'It\'s also what makes intricate designs possible, like the new-build roof one customer described as needing "an engineered solution."'],
      signs: ['Leaks at walls, chimneys, valleys or parapets', 'Rusted or mismatched flashings and cappings', 'An architectural design with non-standard junctions', 'Box gutters or trims that need replacing to suit', 'A re-roof that needs new flashings to match'],
      steps: [['Measure the detail', 'Each junction is measured on site.'], ['Design the part', 'Shape and finish chosen to suit the roof and colour.'], ['Fabricate', 'Flashings, cappings and trims made to size.'], ['Install', 'Fitted and sealed so the finished detail is clean and watertight.']],
      related: ['cladding', 'architectural-traditional', 'colorbond-roofing']
    },
    {
      slug: 'architectural-traditional', name: 'Architectural & traditional roofing', short: 'Architectural & traditional',
      card: 'Roofing for architect-designed homes and traditional buildings, where the finish matters as much as the fix.',
      eyebrow: 'Service · Architectural & traditional', title: 'Where the roof is <em>part of the design.</em>',
      intro: 'Architectural roofing and cladding for contemporary homes, plus careful work on traditional buildings.',
      whatTitle: 'Precision work, <em>new and old.</em>',
      what: ['On architect-designed homes, the roof is visible and the detailing is part of the look. Straight lines, crisp edges and neat junctions all matter.', 'Traditional roofs need a similar care: working with the character of an older building while making it watertight. Talk to the team about your plans.'],
      signs: ['An architect-designed home or renovation with exposed metal roofing', 'Complex roof shapes, skillions or concealed gutters', 'A traditional building whose roof needs replacing or repair', 'Roof and wall cladding that need to match', 'You need a crew comfortable with engineered details'],
      steps: [['Review plans', 'Drawings, specifications and site conditions reviewed.'], ['Resolve the details', 'Junctions, edges and custom parts planned before work starts.'], ['Fabricate & install', 'Custom parts made and the roof installed with care.'], ['Final detailing', 'Every edge checked and the site left clean.']],
      related: ['cladding', 'fabrication', 'colorbond-roofing']
    }
  ];

  var QUOTES = [
    { text: 'They\u2019re a family-orientated business with a strong team culture, and it really shows in the respectful, professional service they deliver. They installed our new build corrugated Colorbond roof, including some intricate details that required an engineered solution.', name: 'Brett D.', topic: 'New-build Colorbond roof' },
    { text: 'Highly recommend Mitch and Ryan and the team. They did a fabulous job at replacing our corrugated iron roof to a modern colourbond roof, and at a very competitive price\u2026 We were so impressed with their work that we had them return to replace a hail damaged outdoor area roof.', name: 'Brad H.', topic: 'Re-roof & hail-damaged outdoor roof' },
    { text: 'No more asbestos!\u2026 Straight screws, perfect cuts, beautiful detailing and they took all their rubbish.', name: 'Tuan L.', topic: 'Asbestos roof replacement' }
  ];

  var bySlug = {};
  SERVICES.forEach(function (s) { bySlug[s.slug] = s; });
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Render service cards */
  $$('[data-svc-cards]').forEach(function (el) {
    var html = SERVICES.map(function (s, i) {
      return '<a class="svc-card" href="#/services/' + s.slug + '"><span class="svc-no">0' + (i + 1) + '</span><h3>' + esc(s.name) + '</h3><p>' + esc(s.card) + '</p><span class="svc-more">Learn more <i aria-hidden="true">→</i></span></a>';
    }).join('');
    html += '<a class="svc-card cta" href="#/contact"><span class="svc-no">08</span><h3>Not sure what you need?</h3><p>Tell us what\u2019s happening with the roof and the team will advise.</p><span class="svc-more">Request a quote <i aria-hidden="true">→</i></span></a>';
    el.innerHTML = html;
  });

  /* Render testimonials */
  $$('[data-quotes]').forEach(function (el) {
    el.innerHTML = QUOTES.map(function (q) {
      return '<figure class="quote"><span class="eyebrow" style="margin:0">Google review</span><blockquote>\u201C' + esc(q.text) + '\u201D</blockquote><figcaption>' + esc(q.name) + '<span>' + esc(q.topic) + ' · Google review</span></figcaption></figure>';
    }).join('');
  });

  /* Form service options */
  var sel = $('#f-service');
  if (sel) {
    sel.innerHTML = '<option value="">Select a service</option>' + SERVICES.map(function (s) { return '<option value="' + esc(s.name) + '">' + esc(s.name) + '</option>'; }).join('') + '<option value="Commercial / builder project">Commercial / builder project</option><option value="Not sure / other">Not sure / other</option>';
  }

  /* Service detail filler */
  function fillService(s) {
    var v = $('[data-view="service"]');
    $('[data-s="name"]', v).textContent = s.short;
    $('[data-s="eyebrow"]', v).textContent = s.eyebrow;
    $('[data-s="title"]', v).innerHTML = s.title;
    $('[data-s="intro"]', v).textContent = s.intro;
    $('[data-s="whatTitle"]', v).innerHTML = s.whatTitle;
    $('[data-s="what"]', v).innerHTML = s.what.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    $('[data-s="signs"]', v).innerHTML = s.signs.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('');
    $('[data-s="steps"]', v).innerHTML = s.steps.map(function (st) { return '<li><h3>' + esc(st[0]) + '</h3><p>' + esc(st[1]) + '</p></li>'; }).join('');
    $('[data-s="related"]', v).innerHTML = s.related.map(function (r) { var o = bySlug[r]; return '<a href="#/services/' + o.slug + '"><b>' + esc(o.name) + '</b><span>View service →</span></a>'; }).join('');
    $$('[data-fig]', v).forEach(function (f) { f.hidden = f.getAttribute('data-fig') !== s.slug; });
    $('[data-s-quote]', v).setAttribute('href', '#/contact?service=' + encodeURIComponent(s.name));
  }

  /* Header elements */
  var head = $('#masthead');
  var burger = $('#burger');
  var mnav = $('#mobile-nav');
  var drop = $('#drop');
  var dropBtn = $('#drop-btn');
  var toTop = $('#to-top');
  var ctaBand = $('#cta-band');
  var ctaTitle = $('#cta-title');

  function setHeadH() { document.documentElement.style.setProperty('--head-h', head.getBoundingClientRect().bottom + 'px'); }

  function openMenu() {
    setHeadH();
    mnav.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('menu-open');
    var first = $('a', mnav); if (first) first.focus();
  }
  function closeMenu(returnFocus) {
    if (!mnav.classList.contains('open')) return;
    mnav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
    if (returnFocus) burger.focus();
  }
  burger.addEventListener('click', function () { mnav.classList.contains('open') ? closeMenu(true) : openMenu(); });
  mnav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(false); });

  function openDrop() { drop.classList.add('open'); dropBtn.setAttribute('aria-expanded', 'true'); }
  function closeDrop() { drop.classList.remove('open'); dropBtn.setAttribute('aria-expanded', 'false'); }
  dropBtn.addEventListener('click', function (e) { e.stopPropagation(); drop.classList.contains('open') ? closeDrop() : openDrop(); });
  var hoverable = window.matchMedia('(hover: hover)');
  var dropTimer;
  drop.addEventListener('mouseenter', function () { if (hoverable.matches) { clearTimeout(dropTimer); openDrop(); } });
  drop.addEventListener('mouseleave', function () { if (hoverable.matches) { dropTimer = setTimeout(closeDrop, 180); } });
  drop.addEventListener('focusout', function (e) { if (!drop.contains(e.relatedTarget)) closeDrop(); });
  $('#drop-panel').addEventListener('click', function (e) { if (e.target.closest('a')) closeDrop(); });
  document.addEventListener('click', function (e) { if (!drop.contains(e.target)) closeDrop(); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (mnav.classList.contains('open')) { closeMenu(true); }
    if (drop.classList.contains('open')) { closeDrop(); dropBtn.focus(); }
  });
  window.addEventListener('resize', function () { setHeadH(); if (window.innerWidth > 1120) closeMenu(false); });

  /* Skip link (hash router safe) */
  $('[data-skip]').addEventListener('click', function (e) { e.preventDefault(); $('#main').focus(); });

  /* Scroll: header shadow + back to top */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    head.classList.toggle('scrolled', y > 10);
    var show = y > 600;
    toTop.classList.toggle('show', show);
    toTop.setAttribute('aria-hidden', show ? 'false' : 'true');
    toTop.tabIndex = show ? 0 : -1;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  toTop.addEventListener('click', function () {
    if (!toTop.classList.contains('show')) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $('#main').focus({ preventScroll: true });
  });

  /* Reveal */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }) : null;
  function observe(view) {
    $$('.reveal', view).forEach(function (el) { if (io && !el.classList.contains('in')) io.observe(el); else el.classList.add('in'); });
  }
  if (ctaBand) ctaBand.classList.add('reveal');

  /* Router */
  var views = {};
  $$('[data-view]').forEach(function (v) { views[v.getAttribute('data-view')] = v; });
  var firstLoad = true;

  function route() {
    var raw = (location.hash || '#/').replace(/^#/, '');
    if (raw.charAt(0) !== '/') raw = '/' + raw;
    var parts = raw.split('?');
    var path = parts[0].replace(/\/+$/, '') || '/';
    var query = parts[1] || '';
    var seg = path.split('/').filter(Boolean);
    var name = 'home', navKey = 'home', svc = null;

    if (seg.length === 0) { name = 'home'; }
    else if (seg[0] === 'services' && seg.length === 1) { name = 'services'; navKey = 'services'; }
    else if (seg[0] === 'services' && seg.length === 2 && bySlug[seg[1]]) { name = 'service'; navKey = 'services'; svc = bySlug[seg[1]]; }
    else if (seg.length === 1 && views[seg[0]] && seg[0] !== 'service') { name = seg[0]; navKey = seg[0]; }
    else { name = 'home'; if (location.hash && location.hash !== '#/') history.replaceState(null, '', '#/'); }

    if (svc) fillService(svc);

    Object.keys(views).forEach(function (k) { views[k].classList.toggle('current', k === name); });
    var v = views[name];
    document.title = svc ? svc.name + ' | Budget Roofing Sydney' : (v.getAttribute('data-title') || 'Budget Roofing').replace(/&amp;/g, '&');

    /* CTA band */
    if (v.hasAttribute('data-nocta')) { ctaBand.hidden = true; }
    else {
      ctaBand.hidden = false;
      ctaTitle.textContent = svc ? 'Talk to us about ' + svc.short.toLowerCase() + '.' : (v.getAttribute('data-cta') || 'Ready for a roof done properly?');
    }

    /* Active nav */
    $$('[data-nav]').forEach(function (a) {
      var on = a.getAttribute('data-nav') === navKey;
      a.classList.toggle('active', on);
      if (a.tagName === 'A') { if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); }
    });
    $$('#drop-panel a, .mobile-sub a').forEach(function (a) {
      var on = svc && a.getAttribute('href') === '#/services/' + svc.slug;
      a.classList.toggle('active', !!on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });

    /* Prefill service on contact */
    if (name === 'contact' && sel) {
      var m = query.match(/service=([^&]+)/);
      if (m) { var val = decodeURIComponent(m[1]); for (var i = 0; i < sel.options.length; i++) if (sel.options[i].value === val) sel.selectedIndex = i; }
    }

    closeMenu(false);
    closeDrop();
    if (!firstLoad) {
      window.scrollTo(0, 0);
      $('#main').focus({ preventScroll: true });
    }
    firstLoad = false;
    observe(v);
    if (ctaBand && !ctaBand.hidden && !ctaBand.classList.contains('in')) { if (io) io.observe(ctaBand); else ctaBand.classList.add('in'); }
    onScroll();
  }
  window.addEventListener('hashchange', route);
  route();

  /* Quote form → mailto */
  var form = $('#quote-form');
  var thanks = $('#thanks');
  function setErr(input, msg) { var e = input.parentNode.querySelector('.err'); if (e) e.textContent = msg || ''; input.setAttribute('aria-invalid', msg ? 'true' : 'false'); }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, ok = true, firstBad = null;
      [['name', 'Please enter your name.'], ['phone', 'Please enter a phone number.'], ['suburb', 'Please enter your suburb.']].forEach(function (r) {
        var bad = !f[r[0]].value.trim(); setErr(f[r[0]], bad ? r[1] : ''); if (bad) { ok = false; firstBad = firstBad || f[r[0]]; }
      });
      var em = f.email.value.trim(), emBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
      setErr(f.email, emBad ? 'Please enter a valid email address.' : ''); if (emBad) { ok = false; firstBad = firstBad || f.email; }
      if (!ok) { firstBad.focus(); return; }
      var service = f.service.value || 'Not specified';
      var subject = 'Quote request: ' + service + ' (' + f.suburb.value.trim() + ')';
      var body = 'Hi Budget Roofing team,\n\nI\'d like a quote.\n\nName: ' + f.name.value.trim() + '\nPhone: ' + f.phone.value.trim() + '\nEmail: ' + em + '\nSuburb: ' + f.suburb.value.trim() + '\nService: ' + service + '\n\nDetails:\n' + (f.message.value.trim() || '-') + '\n\nThanks!';
      window.location.href = 'mailto:info@budgetroofing.com.au?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      form.hidden = true; thanks.hidden = false; thanks.focus();
    });
    $('#again').addEventListener('click', function () { form.reset(); thanks.hidden = true; form.hidden = false; form.elements.name.focus(); });
  }
})();
