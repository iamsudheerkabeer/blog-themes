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
