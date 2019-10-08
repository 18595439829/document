const markdown = require('markdown-it');
const hljs = require('highlight.js');

function markLoader(src) {
  const md = markdown({
    html: true,
    typographer: true,
    highlight(str) {
      if (hljs.getLanguage('vue')) {
        try {
          return `<pre class="hljs"><code>${
            hljs.highlight('vue', str, true).value
          }</code></pre>`;
        } catch (error) {
          console.log(error);
        }
      }

      return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
    },
  });
  const html = md.render(src);

  return (
    '<template>\n'
    + `<div class="markdown">${html}</div>\n`
    + '</template>\n'
  );
}
module.exports = markLoader;
