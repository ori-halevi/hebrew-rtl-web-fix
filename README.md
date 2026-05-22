# RTL Fix 🔧

> תיקון כיווניות עברית בכל דף אינטרנט — בלחיצה אחת.
> One-click Hebrew/RTL text direction fix for any web page.

---

## עברית

### מה זה?

לפעמים אתרים מציגים טקסט עברי בכיווניות שגויה — שמאל לימין במקום ימין לשמאל,
או יישור הפוך. **RTL Fix** הוא *bookmarklet* קטן שמתקן את זה בלחיצה אחת,
על כל דף, בלי להתקין שום דבר.

לחיצה אחת — מתקן. לחיצה נוספת — מחזיר למצב המקורי.

### התקנה (הדרך הקלה)

1. היכנסו לדף ההתקנה: **[קישור ל-GitHub Pages שלכם]**
2. גררו את הכפתור הכתום לשורת הסימניות של הדפדפן.
3. זהו. בכל דף בעייתי — לחצו על הסימנייה.

> 💡 כדי להפעיל את GitHub Pages: בריפו לכו ל-`Settings → Pages`,
> ובחרו את ה-branch הראשי. הקישור לדף יהיה
> `https://USERNAME.github.io/REPO/`.

### התקנה ידנית

אם הגרירה לא עובדת, צרו סימנייה חדשה והדביקו את הקוד הבא בשדה הכתובת:

```js
javascript:(function(){var e=document.getElementById('rtl-fix-style');if(e){e.remove();}else{var s=document.createElement('style');s.id='rtl-fix-style';s.innerHTML='p,li,h1,h2,h3,h4,h5,h6,span,div{unicode-bidi:isolate;direction:rtl;text-align:right;}';document.head.appendChild(s);}})();
```

### איך זה עובד?

ה-bookmarklet מזריק תגית `<style>` שמכריחה את רכיבי הטקסט בדף
(`p`, `li`, כותרות, `span`, `div`) לקבל `direction: rtl`, יישור לימין,
ו-`unicode-bidi: isolate` למניעת ערבוב מבלבל של עברית ואנגלית.
התגית מסומנת במזהה ייחודי, כך שלחיצה חוזרת פשוט מסירה אותה.

---

## English

### What is it?

Some sites render Hebrew (or other RTL) text in the wrong direction.
**RTL Fix** is a tiny *bookmarklet* that corrects this on any page with a
single click — no extension, no signup, no setup.

Click once to apply, click again to revert.

### Installation (the easy way)

1. Open the install page: **[your GitHub Pages link]**
2. Drag the orange button onto your browser's bookmarks bar.
3. Done. On any broken page, click the bookmark.

### Manual installation

Create a new bookmark and paste this into the URL field:

```js
javascript:(function(){var e=document.getElementById('rtl-fix-style');if(e){e.remove();}else{var s=document.createElement('style');s.id='rtl-fix-style';s.innerHTML='p,li,h1,h2,h3,h4,h5,h6,span,div{unicode-bidi:isolate;direction:rtl;text-align:right;}';document.head.appendChild(s);}})();
```

### How it works

The bookmarklet injects a `<style>` tag that forces text elements to use
`direction: rtl`, right alignment, and `unicode-bidi: isolate`. The tag
carries a unique id, so clicking again simply removes it — a clean toggle.

---

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Drag-to-install landing page (host via GitHub Pages) |
| `bookmarklet.js` | Human-readable source of the bookmarklet |
| `README.md` | This file |
| `LICENSE` | MIT License |

## License

MIT — free to use, modify, and share.
