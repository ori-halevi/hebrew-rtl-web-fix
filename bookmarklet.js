/*
 * RTL Fix — bookmarklet source
 * --------------------------------
 * This is the human-readable source of the bookmarklet.
 * The minified `javascript:` version (used in index.html and the README)
 * is generated from this file.
 *
 * Behaviour: toggles a <style> tag that forces right-to-left direction
 * and right alignment on text elements. Click once to apply, click
 * again to remove.
 */
(function () {
  var existing = document.getElementById('rtl-fix-style');
  if (existing) {
    existing.remove();
  } else {
    var style = document.createElement('style');
    style.id = 'rtl-fix-style';
    style.innerHTML =
      'p,li,h1,h2,h3,h4,h5,h6,span,div{' +
      'unicode-bidi:isolate;' +
      'direction:rtl;' +
      'text-align:right;' +
      '}';
    document.head.appendChild(style);
  }
})();
