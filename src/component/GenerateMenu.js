import React from 'react';
import DefaultMenu from './payload/Menu'

class MainMenu extends React.Component {
    render(){
        let HTMLElement = [];
        for(const [key, value] of Object.entries(DefaultMenu)){
            console.log(`Rendering: ${key} ${JSON.stringify(value)}`)
            HTMLElement.push(<a href={value.href} title={value.title} key={value.title}><img src={value.src} className="item" alt={value.title}/></a>)
        }          

        return(HTMLElement)
    }
}

export default MainMenu