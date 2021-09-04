import React from 'react';

class CurrentDate extends React.Component {
    render(){
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let postfix;
      
        switch (new Date().getDate() % 10) {
          case 1: postfix = 'st'; break;
          case 2: postfix = 'nd'; break;
          case 3: postfix = 'rd'; break;
          default: postfix = 'th'
        }
      
        return(<div>{weekday[new Date().getDay()]} {new Date().getDate()}{postfix} {months[new Date().getMonth()]}</div>)
    }
}

export default CurrentDate