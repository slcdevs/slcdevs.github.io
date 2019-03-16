$(document).ready(function () {
  var myInit = {
    method: 'GET',
    cache: 'default'
  };

  fetch('https://cors-anywhere.herokuapp.com/https://api.meetup.com/slcdevs/events?&amp;sign=true&amp;photo-host=public&amp;page=20', myInit)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.length == 0) {
        return;
      }

      let title = data[0].name;
      let description = data[0].description;
      let link = data[0].link;
      let address = ''
      let venue = '';

      if (data[0].venue != null) {
        address = data[0].venue.address_1;
        venue = data[0].venue.name
      }

      let date = data[0].local_date;
      let time = data[0].local_time;

      let html = `
      <a href='${link}'>
      <h2>${title}</h2>
      </a>
      <br>
      <h3>${date} ${venue} ${address} ${time}</h3>
      <br>${description}
      `;

      $("#jumbotron").html(html);

    });
});
