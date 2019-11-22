import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div className="main">
                <span id="text" >
                    Since 31/10, how many inquiries, insistences and snide comments <br /> have been made about my potential marriage?
                </span>
                <figure>{this.props.number}</figure>

            </div>

        )

    }
}