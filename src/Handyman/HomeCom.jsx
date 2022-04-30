import React, { Component } from "react";
import "./home.css"
class HomeCom extends Component {
    state = {

    }

    render() {
        const { Categories, index, handleVender } = this.props;
        const{items,numberOfVender,message} = Categories
        return (
            <button className="btn" onClick={()=>{handleVender(index)}}>
                <div class="card">
                    <div class="card-body">
                        <p className="items">{items}</p>
                        <span>{numberOfVender}</span>
                        <span className="message">{message}</span>
                    </div>
                </div>
            </button>
        )
    }
}

export default HomeCom;