export function htmlToText(html) {
  // if (window && window.DOMParser) {
  //   const container = document.createElement('div');
  //   container.innerHTML = html;
  //   return container.textContent || '';
  // }
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}