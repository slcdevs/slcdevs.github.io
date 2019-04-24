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

  let venue = '';
  let address = '';

  if (data[0].venue != null) {
    venue = data[0].venue.name
    address = data[0].venue.address_1;
  }

  data.forEach(function(event, i) {
    if (i > 2) {
      return;
    }

    $("#events").append(`
    <div class="card mb-3" id="event">
      <div class="card-header">
        <h3>${event.name}</h3>
        ${event.local_date} ${event.local_time} ${venue} ${address} @ ${event.local_time}
      </div>
      <div class="card-body">
        ${event.description}
      </div>
    </div>`);
  });
});
