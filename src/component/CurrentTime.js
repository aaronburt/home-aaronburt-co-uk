import React from 'react';

class CurrentTime extends React.Component {
    render(){
        return(<div><h2>{new Date().toLocaleTimeString()}</h2></div>)
    }
}

export default CurrentTime;