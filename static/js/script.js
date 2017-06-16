/**
 * Search DuckDuckGo on Enter key press or search button click
 */
document.getElementById('search-input').addEventListener("keyup", function (event) {
  if (event.key === 'Enter') {
    document.getElementById('search-button').click();
  }
});
document.getElementById('search-button').addEventListener("click", function (event) {
  var query = document.getElementById('search-input').value;
  window.location.href = 'https://duckduckgo.com/?q=' + query;
});

/**
 * Get list of online streamers that are followed.
 */
