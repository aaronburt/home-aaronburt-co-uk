import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import DefaultMenu from './Menu'


function TimeTick() {
    let time = (<div><h2>{new Date().toLocaleTimeString()}</h2></div>);
    ReactDOM.render(time, document.getElementById('time'));
  }

function DateTime(){
  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let postfix;

  switch (new Date().getDate() % 10) {
    case 1: postfix = 'st'; break;
    case 2: postfix = 'nd'; break;
    case 3: postfix = 'rd'; break;
    default: postfix = 'th'
  }

  let returns = (<div>{weekday[new Date().getDay()]} {new Date().getDate()}{postfix} {months[new Date().getMonth()]}</div>)
  ReactDOM.render(returns, document.getElementById('date'));
}

function ForcastGet(city){
  if(city.length === 0){ console.log('City length invalid') }

  let icon_url = "https://s.cdpn.io/162656/";

  fetch(`https://api.aaronburt.co.uk/forcast/today/${city}`)
    .then(response => { return response.json(); })
    .then(data => { 
      return (<div id="weather_tag">
      <h2 data-name={data.name}><span>{data.name}</span><sup>{data.sys.country}</sup></h2>
      <div class="city-temp">{data.main.feels_like}<sup>c</sup></div>
      <figure>
      <img class="city-icon" src={icon_url + data.weather[0].icon + ".svg"} alt="scattered clouds"/>
      <figcaption>{data.weather[0].description}</figcaption>
      </figure>
      </div>);
    })
    .then(data => { ReactDOM.render(data, document.getElementById('weather')); })
    .catch(error => { console.log(error); })
}


function GenerateMenuItem(){

  let HTMLElement = [];
  for(const [key, value] of Object.entries(DefaultMenu)){
    console.log(`Rendering: ${key} ${JSON.stringify(value)}`)
    HTMLElement.push(<a href={value.href} title={value.title}><img src={value.src} class="item"/></a>)
  }
  
  ReactDOM.render(HTMLElement, document.getElementById('menu'))
}

export { TimeTick, DateTime, GenerateMenuItem, ForcastGet };
