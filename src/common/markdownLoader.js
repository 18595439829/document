const markdown = require('markdown-it');
const hljs = require('highlight.js');

function markLoader(src) {
  const md = markdown({
    html: true,
    typographer: true,
    highlight(str, language) {
      console.log(language);
      if (language && hljs.getLanguage(language)) {
        try {
          console.log(111);
          return `<pre class="hljs"><code>${
            hljs.highlight(language, str, true).value
          }</code></pre>`;
        } catch (error) {
          console.log(error);
        }
      }
      console.log(222);
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
