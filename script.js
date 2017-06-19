/**
 * Search DuckDuckGo on Enter key press or search button click.
 */
document.getElementById('search-input').addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    document.getElementById('search-button').click();
  }
});
document.getElementById('search-button').addEventListener("click", function (event) {
  const query = document.getElementById('search-input').value;
  window.location.href = 'https://duckduckgo.com/?q=' + query;
});

/**
 * Table of links.
 */
const link = document.getElementsByClassName('link');
for (let i = 0; i < link.length; i++) {
  link[i].onclick = function (event) {
    window.location.href = this.getAttribute('data-url');
  }
}

/**
 * Get list of online streamers that are followed.
 */
// TODO.
