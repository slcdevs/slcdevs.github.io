$(document).ready(function () {
  var myInit = { method: 'GET',
               cache: 'default' };

  fetch('https://cors-anywhere.herokuapp.com/https://api.meetup.com/slcdevs/events?&amp;sign=true&amp;photo-host=public&amp;page=20', myInit)
    .then(function (res) {
      return res.json()
    })
    .then(function (myJson) {
      let title = myJson[0].name;
      let description = myJson[0].description;
      let link = myJson[0].link;
      let address = myJson[0].venue.address_1;
      let venue = myJson[0].venue.name;
      let date = myJson[0].local_date;
      let time = myJson[0].local_time;
      let html = `
      <a href='${link}'>
      <h2>${title}</h2>
      </a>
      <br>
      <h3>${date} ${venue} ${address} ${time}</h3>
      <br>${description}
      `;
      $("#jumbotron").html(html)
    })
});
