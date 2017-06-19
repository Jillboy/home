// Search DuckDuckGo on Enter key press or search button click.
document.getElementById('search-input').onkeyup = (event) => {
  if (event.key === 'Enter')
    document.getElementById('search-button').click();
}
document.getElementById('search-button').onclick = (event) => {
  const query = document.getElementById('search-input').value;
  window.location.href = 'https://duckduckgo.com/?q=' + query;
}

// Open link in new tab on clicking a link cell.
const links = document.getElementsByClassName('link');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = (event) => {
    window.open(links[i].getAttribute('data-url'));
  }
}

/**
 * Get list of online streamers that are followed.
 */
// TODO.
