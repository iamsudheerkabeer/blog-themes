(function applySiteConfig() {
  var _0xh = window.location.hostname;
  var _0xv = "vazhchayugam";
  var _0xb = "blogger";
  var _0xs = "sudheer";
  
  if (_0xh.indexOf(_0xv) === -1 && _0xh.indexOf(_0xb) === -1 && _0xh.indexOf(_0xs) === -1 && _0xh !== "localhost") {
      document.documentElement.innerHTML = "<h1 style='text-align:center;margin-top:20vh;color:red;font-family:sans-serif;'>🚨 Error: Theme License Invalid or Stolen!</h1>";
      return; 
  }

  const c = SiteConfig.colors;
  const root = document.documentElement;
  root.style.setProperty('--bg', c.bg); root.style.setProperty('--header-bg', c.headerBg);
  root.style.setProperty('--card-bg', c.cardBg); root.style.setProperty('--text', c.text);
  root.style.setProperty('--text-dim', c.textDim); root.style.setProperty('--accent', c.accent);
  root.style.setProperty('--border', c.border); root.style.setProperty('--red', c.red);
  root.style.setProperty('--green', c.green); root.style.setProperty('--blue', c.blue); root.style.setProperty('--gold', c.gold);

  const styleEl = document.createElement('style');
  styleEl.textContent = `body.light-mode{--bg:${c.lightBg};--header-bg:${c.lightHeaderBg};--card-bg:${c.lightCardBg};--text:${c.lightText};--text-dim:${c.lightTextDim};--accent:${c.lightAccent};--border:${c.lightBorder};}`;
  document.head.appendChild(styleEl);
})();

(function renderFromConfig() {
  const S = SiteConfig;
  const safeSet = (id, prop, val) => { const el = document.getElementById(id); if (el) el[prop] = val; };
  
  safeSet('navLogo', 'src', S.site.logoUrl);
  safeSet('footerLogo', 'src', S.site.logoUrl);
  safeSet('adminPhoto', 'src', S.site.adminPhoto);
  safeSet('topBarRight', 'innerHTML', S.site.topBarRight);
  safeSet('navSkHome', 'href', S.social.skHome);
  safeSet('adminNewPost', 'href', 'https://www.blogger.com/blog/posts/' + S.site.blogId);
  safeSet('tickerLabel', 'textContent', S.ticker.label);
  safeSet('footerSiteName', 'textContent', S.site.name + ' | News On The Go');
  safeSet('footerAdsLink', 'href', S.social.whatsappContact);

  const fm = document.getElementById('footerMenu');
  if (fm) fm.innerHTML = S.footerMenu.map(item => `<li><a href="${item.url}">${item.label}</a></li>`).join('');
  const dm = document.getElementById('districtMenu');
  if (dm) dm.innerHTML = S.districts.map(d => `<a href="/search/label/${encodeURIComponent(d.name)}">${d.label}</a>`).join('');
  const cm = document.getElementById('categoryMenu');
  if (cm) cm.innerHTML = S.categories.map(c => `<a href="/search/label/${c.name}">${c.label}</a>`).join('');
  const pm = document.getElementById('policyMenu');
  if (pm) pm.innerHTML = S.policies.map(p => `<a href="${p.url}">${p.label}</a>`).join('');

  const socialIcons = {
    instagram: { href: S.social.instagram, title: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.848 0-3.204.012-3.584.07-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    facebook: { href: S.social.facebook, title: 'Facebook', path: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' },
    youtube: { href: S.social.youtube, title: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
    telegram: { href: S.social.telegram, title: 'Telegram', path: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.462 8.161c-.18.717-.962 4.084-1.362 5.441-.168.55-.5.719-.694.737-.425.044-.748-.276-1.16-.547-.644-.422-1.008-.684-1.631-1.097-.723-.478-.255-.741.158-1.169.108-.112 1.987-1.822 2.023-1.977.004-.019.008-.09-.035-.128-.044-.038-.108-.025-.155-.014-.066.015-1.114.708-3.141 2.077-.297.204-.566.305-.807.299-.265-.006-.775-.151-1.154-.274-.464-.15-.833-.231-.801-.487.017-.133.2-.27.549-.41 2.146-.933 3.578-1.549 4.295-1.847 2.047-.85 2.472-1 2.75-.999.061 0 .198.014.287.087.075.062.096.146.104.21.01.076.01.155.004.232z' },
    whatsapp: { href: S.social.whatsappGroup, title: 'WhatsApp', path: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.888-9.886.002-5.447-4.435-9.887-9.888-9.887-5.447 0-9.885 4.438-9.888 9.886-.001 2.106.56 3.667 1.594 5.397l-1.047 3.816 3.949-1.002zm11.367-7.384c-.333-.167-1.967-.97-2.271-1.081-.303-.11-.524-.167-.745.167-.221.334-.856 1.081-1.048 1.303-.192.222-.385.25-.718.083-.333-.167-1.405-.518-2.676-1.652-.988-.88-1.654-1.968-1.848-2.301-.194-.334-.021-.515.145-.68.15-.15.333-.388.5-.583.167-.194.222-.334.333-.556.111-.222.056-.417-.028-.583-.084-.167-.745-1.796-1.02-2.459-.268-.647-.542-.559-.745-.569l-.637-.008c-.221 0-.58.083-.884.417-.304.334-1.16 1.139-1.16 2.778 0 1.639 1.188 3.223 1.354 3.445.166.222 2.338 3.57 5.663 5.008.791.341 1.408.544 1.89.699.794.252 1.517.216 2.088.131.637-.094 1.967-.805 2.243-1.583.277-.778.277-1.444.194-1.583-.083-.14-.305-.222-.638-.389z' },
  };

  const socialsEl = document.getElementById('adminSocials');
  if (socialsEl) {
    socialsEl.innerHTML = Object.values(socialIcons).map(icon =>
      `<a href="${icon.href}" target="_blank" title="${icon.title}"><svg viewBox="0 0 24 24"><path d="${icon.path}"/></svg></a>`
    ).join('');
  }
})();

function toggleMobileMenu() { const m = document.getElementById('mobileMenu'); if(m) m.classList.toggle('active'); }
function handleSearch() { const i = document.getElementById('searchInput'); const f = document.getElementById('searchForm'); if(i && i.value.trim() === "") i.focus(); else if(f) f.submit(); }
function toggleSubMenu(el) { if(window.innerWidth <= 1100 && el){ var c = el.nextElementSibling; if(c) c.classList.toggle('active'); } }

const d = new Date();
const td = document.getElementById('topDate'); const yt = document.getElementById('yTxt');
if(td) td.textContent = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
if(yt) yt.textContent = d.getFullYear();

const tBtn = document.getElementById('themeBtn');
if(localStorage.getItem('mode') === 'light') document.body.classList.add('light-mode');
if(tBtn) {
  tBtn.onclick = () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('mode', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  };
}

let newsFeedData = [];
fetch('/feeds/posts/default?alt=json&max-results=' + SiteConfig.ticker.maxPosts)
  .then(r => r.json())
  .then(data => {
    const entries = data.feed?.entry;
    newsFeedData = entries || [];
    let tH = '', sH = '';

    if(entries) {
      entries.forEach((e, i) => {
        let title = e.title?.$t || 'No Title';
        let altLink = e.link?.find(x => x.rel === 'alternate');
        let link = altLink ? altLink.href : '#';
        let published = new Date(e.published.$t).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
        
        let img = 'https://via.placeholder.com/400x250?text=News';
        if(e.media$thumbnail) img = e.media$thumbnail.url.replace('s72-c', 's600-c');
        else if(e.content && e.content.$t.includes('<img')) {
            let m = e.content.$t.match(/src="([^"]+)"/);
            if(m) img = m[1];
        }
        
        tH += `<div class="ticker-item"><img src="${img}"/><a href="${link}">${title}</a></div>`;
        if(i < SiteConfig.trending.maxPosts) {
          sH += `<a href="${link}" class="trend-item"><img src="${img}" alt="${title}"/><div class="trend-info"><h4>${title}</h4><span class="trend-date">📅 ${published}</span></div></a>`;
        }
      });

      const tickerEl = document.getElementById('ticker-content');
      if(tickerEl) { tickerEl.style.animationDuration = SiteConfig.ticker.speedSeconds + 's'; tickerEl.innerHTML = tH; }
      const trendEl = document.getElementById('trending-sidebar');
      if(trendEl) trendEl.innerHTML = sH;
      injectPostAddons(); 
    }
  }).catch(err => {
    console.error("Feed error:", err);
    const tickerEl = document.getElementById('ticker-content');
    if(tickerEl) tickerEl.innerHTML = '<span style="padding:0 20px;">Latest news loading failed.</span>';
  });

function injectPostAddons() {
  const body = document.getElementById('mainPostContent');
  if (!body) return;

  let firstEl = body.firstElementChild;
  while (firstEl && firstEl.tagName === 'P') {
    if (firstEl.innerHTML.replace(/&nbsp;/g, '').replace(/<br\s*\/?>/g, '').trim() === '') {
      const nextEl = firstEl.nextElementSibling;
      firstEl.remove();
      firstEl = nextEl;
    } else break;
  }

  body.querySelectorAll('.separator img').forEach(img => {
    img.removeAttribute('width'); img.removeAttribute('height');
    img.style.width = '100%'; img.style.height = 'auto'; img.style.borderRadius = '10px'; img.style.display = 'block';
    let src = img.getAttribute('src');
    if (src && src.includes('blogger.googleusercontent.com')) img.setAttribute('src', src.split('=')[0] + '=s1200');
    let parentA = img.closest('a');
    if (parentA) { parentA.style.marginLeft = '0'; parentA.style.marginRight = '0'; parentA.style.display = 'block'; }
  });
  
  const elements = Array.from(body.querySelectorAll('p')).filter(p => p.textContent.trim().length > 0);
  const createAd = (d) => `<div class="in-post-ad"><a href="${d.link}" target="_blank"><img src="${d.img}"/></a></div>`;
  const insertAfter = (ref, node) => { if(ref && ref.parentNode) ref.parentNode.insertBefore(node, ref.nextSibling); };

  const used = new Set();
  const queue = [];

  SiteConfig.injections.forEach(inj => {
    let isActive = inj.type === 'ad' ? (SiteConfig.ads[inj.key]?.active) : (SiteConfig.ads.readAlso?.active);
    if (isActive) {
      if (inj.pIndex < elements.length) {
        const wrap = document.createElement('div');
        if (inj.type === 'ad') wrap.innerHTML = createAd(SiteConfig.ads[inj.key]);
        else if (inj.type === 'related' && newsFeedData.length > 0) {
          const rel = newsFeedData[Math.floor(Math.random() * newsFeedData.length)];
          const relLink = rel.link.find(l => l.rel === 'alternate').href;
          let relImg = rel.media$thumbnail ? rel.media$thumbnail.url.replace(/\/s[0-9]+(-c)?\//, '/s200-c/').replace(/=s[0-9]+(-c)?/, '=s200-c') : 'https://via.placeholder.com/110x75';
          wrap.innerHTML = `<div class="in-post-related"><img src="${relImg}" style="width:110px;height:75px;object-fit:cover;border-radius:8px;"/><div style="flex:1;"><small style="color:var(--accent);font-weight:900;display:block;margin-bottom:3px;">READ ALSO</small><a href="${relLink}" style="font-weight:bold;text-decoration:none;font-size:14px;line-height:1.4;display:block;">${rel.title.$t}</a></div></div>`;
        }
        insertAfter(elements[inj.pIndex], wrap);
        used.add(inj.pIndex);
      } else queue.push(inj);
    }
  });

  if (queue.length > 0) {
    for (let i = 0; i < elements.length; i++) {
      if (!used.has(i)) {
        const inj = queue.shift();
        if (!inj) break;
        const wrap = document.createElement('div');
        if (inj.type === 'ad') wrap.innerHTML = createAd(SiteConfig.ads[inj.key]);
        else if (inj.type === 'related' && newsFeedData.length > 0) {
          const rel = newsFeedData[Math.floor(Math.random() * newsFeedData.length)];
          const relLink = rel.link.find(l => l.rel === 'alternate').href;
          let relImg = rel.media$thumbnail ? rel.media$thumbnail.url.replace(/\/s[0-9]+(-c)?\//, '/s200-c/').replace(/=s[0-9]+(-c)?/, '=s200-c') : 'https://via.placeholder.com/110x75';
          wrap.innerHTML = `<div class="in-post-related"><img src="${relImg}" style="width:110px;height:75px;object-fit:cover;border-radius:8px;"/><div style="flex:1;"><small style="color:var(--accent);font-weight:900;display:block;margin-bottom:3px;">READ ALSO</small><a href="${relLink}" style="font-weight:bold;text-decoration:none;font-size:14px;line-height:1.4;display:block;">${rel.title.$t}</a></div></div>`;
        }
        insertAfter(elements[i], wrap);
        used.add(i);
      }
    }
  }
}

function shareWa() { window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent(document.title + "\n" + window.location.href), "_blank"); }
function shareTg() { window.open("https://t.me/share/url?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent(document.title), "_blank"); }
function copyNow(u) {
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(u).then(()=>showToast()).catch(()=>fallbackCopy(u));
  else fallbackCopy(u);
}
function fallbackCopy(u) {
  const t = document.createElement('textarea'); t.value = u; document.body.appendChild(t); t.select();
  try { document.execCommand('copy'); } catch(err){}
  document.body.removeChild(t); showToast();
}
function showToast() { const t = document.getElementById('toast'); if(t) { t.className = 'show'; setTimeout(() => { t.className = ''; }, 2500); } }

function copyContent(event) {
    const chapterArea = document.getElementById('chapter-content');
    if (!chapterArea) { alert("cant find copying content!"); return; }
    const range = document.createRange(); range.selectNode(chapterArea);
    window.getSelection().removeAllRanges(); window.getSelection().addRange(range);
    try {
        document.execCommand('copy');
        const btn = event ? event.target : null;
        if (btn) {
            const org = btn.innerHTML; btn.innerHTML = "✅ Copied to Clipboard!"; btn.style.background = "#28a745"; 
            setTimeout(() => { btn.innerHTML = org; btn.style.background = ""; }, 2000);
        }
    } catch (err) { alert("Sorry, Text Cant be Copied."); }
    window.getSelection().removeAllRanges();
}

(function() {
    const chapterDiv = document.getElementById('chapter-content');
    if (!chapterDiv) return;

    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    const urlParts = currentUrl.split('/');
    if (urlParts.length < 6) return;

    const year = urlParts[3], month = urlParts[4], fileName = urlParts[5];
    const seriesConfig = SiteConfig.series;
    let currentSeries = Object.keys(seriesConfig).find(s => fileName.includes(s));
    if (!currentSeries) return; 

    const totalChapters = seriesConfig[currentSeries];
    const baseFileName = fileName.substring(0, fileName.lastIndexOf('-') + 1);
    const baseUrl = urlParts[0] + "//" + urlParts[2];
    
    let currentIndex = -1, chapters = [];
    for(let i=1; i<=totalChapters; i++) chapters.push(`${baseUrl}/${year}/${month}/${baseFileName}${i}.html`);

    let navHtml = '<div id="auto-navigation" style="margin:25px 0;padding:20px;border:1px solid var(--border);border-radius:15px;background:rgba(255,255,255,0.02);"><div align="center"><p style="font-weight:900;color:var(--accent);text-transform:uppercase;font-size:12px;margin-bottom:15px;">Chapters List</p><div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;">';

    chapters.forEach((link, index) => {
        const chapterNum = index + 1;
        const isCurrent = currentUrl.includes(baseFileName + chapterNum + '.html');
        if (isCurrent) currentIndex = chapterNum;
        navHtml += `<a href="${link}" class="${isCurrent ? 'btn-red' : 'btn-blue'}" style="min-width:38px;height:38px;display:flex;align-items:center;justify-content:center;text-decoration:none;border-radius:8px;font-size:13px;font-weight:bold;">${chapterNum}</a>`;
    });

    navHtml += '</div><div style="margin-top:25px;display:flex;justify-content:center;gap:15px;border-top:1px solid var(--border);padding-top:20px;">';
    if (currentIndex > 1) navHtml += `<a href="${baseUrl}/${year}/${month}/${baseFileName}${currentIndex - 1}.html" class="btn-blue" style="text-decoration:none;flex:1;text-align:center;max-width:150px;">⬅️ Previous</a>`;
    if (currentIndex < totalChapters) navHtml += `<a href="${baseUrl}/${year}/${month}/${baseFileName}${currentIndex + 1}.html" class="btn-blue" style="text-decoration:none;flex:1;text-align:center;max-width:150px;">Next ➡️</a>`;
    
    navHtml += '</div></div></div>';
    chapterDiv.insertAdjacentHTML('afterend', navHtml);
})();
