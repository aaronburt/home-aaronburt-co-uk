import React from 'react';

class SearchBox extends React.Component {
    render(){
        return(
            <form action="https://www.google.com/search" method="GET" target="_blank">
                <input id="search-box" className="side-nav-box" type="text" name="q" autoFocus placeholder="Search Google"></input>
            </form>
        )
    }
}

export default SearchBox