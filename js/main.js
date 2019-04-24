'use strict';

fetch('https://cors-anywhere.herokuapp.com/https://api.meetup.com/slcdevs/events?&amp;sign=true&amp;photo-host=public&amp;page=20', {
  method: 'GET',
  cache: 'default'
}).then(function (res) {
  return res.json();
}).then(function (data) {
  if (data.length == 0) {
    return;
  }

  data.forEach(function(event, i) {
    if (i > 2) {
      return;
    }

    let venue = '';
    let address = '';

    if (event.venue != null) {
      venue = event.venue.name
      address = event.venue.address_1;
    }

    $("#events").append(`
    <div class="card mb-3" id="event">
      <div class="card-header">
        <h3>${event.name}</h3>
        <date>${event.local_date} @ ${event.local_time}</date><br>
        ${venue} ${address}
      </div>
      <div class="card-body">
        ${event.description}
      </div>
    </div>`);
  });
});
