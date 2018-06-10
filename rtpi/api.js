import fetch from 'node-fetch';

const endPoint = 'https://data.smartdublin.ie/cgi-bin/rtpi/';

export default (route, opts = {}) =>
  fetch(endPoint + route, opts)
    .then(res => res.json())
    .then(res => res.results);
