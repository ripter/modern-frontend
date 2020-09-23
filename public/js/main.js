import init, { to_markdown, to_cmark } from '../lib/gfm.js';
// import init from 'https://127.0.0.1:8081/gfm.js';

init().then(wasm => {
  const el = document.getElementById('out');
  const sample = `# Testing Markdown.
  * Item One
  * Item Two

  Code?
  \`\`\`
  const code = 'neato';
  \`\`\`
  `;

  console.log('wasm loaded', wasm);

  // let result = to_markdown(sample);
  let result = to_cmark(sample);
  console.log('result', result);
  el.innerHTML = result;
});
