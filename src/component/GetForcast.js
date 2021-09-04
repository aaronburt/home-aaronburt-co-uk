import React from 'react';

class GetForcast extends React.Component {

    constructor(){
        super()
        this.state = { html: false, icon_url: "https://s.cdpn.io/162656/" }      
    }

    componentDidMount(){
        return new Promise((resolve, reject) => {
            fetch(`https://api.aaronburt.co.uk/forcast/today/${this.props.city}`)
                .then(response => { return response.json(); })
                .then(data => { 
                    return (<div id="weather_tag" className="side-nav-box">
                    <h2 data-name={data.name}><span>{data.name}</span><sup>{data.sys.country}</sup></h2>
                    <div className="city-temp">{data.main.feels_like}<sup>c</sup></div>
                    <figure>
                    <img className="city-icon" src={this.state.icon_url + data.weather[0].icon + ".svg"} alt="scattered clouds"/>
                    <figcaption>{data.weather[0].description}</figcaption>
                    </figure>
                    </div>);
                })
                .then(data => { this.setState({ html: data }, () => { resolve() }) })
                .catch(error => { reject(error) })
        })
    }

    render(){
        if(this.state.html){
            let city = this.props.city;
            if(city.length === 0){ console.log('City length invalid') }
            return(this.state.html)
        } else {
            return(<span></span>)
        }
    }

}

export default GetForcast