import ReactDOM from 'react-dom';
import router from './router/';
import fetch from 'isomorphic-fetch';

const init = () => {
  ReactDOM.render(router, document.querySelector('main'));

  let draai = document.querySelectorAll('.molen-draai-img');
  if(draai) load();
};

const load = () => {
  fetch('https://query.yahooapis.com/v1/public/yql?q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22schiedam%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    .then(r => r.json())
    .then(wind => windInc(wind));
};

const windInc = wind => {
  let draai = document.querySelectorAll('.molen-draai-img');
  let windspeed = wind.query.results.channel.wind.speed;
  let kmWindspeed = Math.round(windspeed * 1.609344);
  console.log(`Hey, momenteel is de windsnelheid in Schiedam ${kmWindspeed} km/u.`);
  if (windspeed <= 10) {
    draai[0].style.animationDuration = '50s';
    draai[1].style.animationDuration = '50s';
  }
  if (windspeed <= 20 && windspeed > 10) {
    draai[0].style.animationDuration = '40s';
    draai[1].style.animationDuration = '40s';
  }
  if (windspeed <= 30 && windspeed > 20) {
    draai[0].style.animationDuration = '10s';
    draai[1].style.animationDuration = '10s';
  }
  if (windspeed <= 40 && windspeed > 30) {
    draai[0].style.animationDuration = '8s';
    draai[1].style.animationDuration = '8s';
  }
  if (windspeed <= 50 && windspeed > 40) {
    draai[0].style.animationDuration = '6s';
    draai[1].style.animationDuration = '6s';
  }
  if (windspeed <= 60 && windspeed > 50) {
    draai[0].style.animationDuration = '2s';
    draai[1].style.animationDuration = '2s';
  }
  if (windspeed >= 61) {
    draai[0].style.animationDuration = '1s';
    draai[1].style.animationDuration = '1s';
  }
};

init();
