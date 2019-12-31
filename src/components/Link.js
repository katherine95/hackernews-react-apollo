import React, { Component } from 'react'
import '../styles/App.css'

class Link extends Component {
    render() {
        const { description, url } = this.props.link
        return (
            <div className="card">
                <div className="container">
                    <h4><b>{description}</b></h4>
                    <p>{url}</p>
                </div>
            </div>
        )
    }
}

export default Link