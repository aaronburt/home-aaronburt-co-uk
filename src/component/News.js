import React from "react";

class News extends React.Component {

    constructor(){
        super()
        this.state = { payload: false }
    }

    componentDidMount(){
        return new Promise((resolve, reject) => {
            fetch("https://www.reddit.com/r/news/.json?limit=1").then(response => {
                return response.json()
            }).then(json => {
                this.setState({ payload: json }, () => { resolve() })
            }).catch(error => {
                reject(error)
            })
        })
    }

    newsContainer(){

        let news = []
        for(const item of this.state.payload.data.children){
            news.push(<div>{item.data.title}</div>)
        }

        console.log(news)


        return(<div id="side-news" className="side-nav-box">{news}</div>)
    }

    render(){
        return(this.state.payload ? (this.newsContainer()) : (<div className="">es</div>))
    }
}

export default News