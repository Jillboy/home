// Search DuckDuckGo on Enter key press or search button click.
document.getElementById('search-input').onkeyup = (event) => {
  if (event.key === 'Enter')
    document.getElementById('search-button').click();
}
document.getElementById('search-button').onclick = (event) => {
  const query = document.getElementById('search-input').value;
  window.location.href = 'https://duckduckgo.com/?q=' + query;
}

// Get list of Twitch streaming
const xhr = new XMLHttpRequest();
const url = 'https://api.twitch.tv/kraken/streams/followed';
const keys = JSON.parse(keysJson);
xhr.onreadystatechange = handleResponse;
xhr.open('GET', url, true);
xhr.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
xhr.setRequestHeader('Client-ID', keys.clientId);
xhr.setRequestHeader('Authorization', 'OAuth ' + keys.oAuthToken);
xhr.send();

function handleResponse() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      if (data._total > 0) {
        let streamers_list = '';
        const streams = data.streams;
        streams.forEach(function (stream, index, array) {
          let title = stream.channel.status.slice(0, 50);
          if (stream.channel.status.length > 50)
            title += '...';
          streamers_list += `
            ${stream.channel.display_name} (<a class="stream-status" href="${stream.channel.url}">${title}</a>)`;
          streamers_list += (index < streams.length-1) ? '<br>' : '';
        });
        document.getElementById('twitch-streams').innerHTML = streamers_list;
      } else {
        document.getElementById('twitch-streams').innerHTML = 'No followed streams live at the moment.';
      }
    } else {
      console.error(`${xhr.status} ${xhr.statusText}`);
    }
  }
}
