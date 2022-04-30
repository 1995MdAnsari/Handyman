import React, {Component} from "react";
import { FaSearch,FaMapMarkerAlt } from 'react-icons/fa';
import HomeCom from "./HomeCom";
import  "./mainCom.css"
class MainComponent extends Component{
    state ={
        Categories : [
            {items:'Fresh Vegetables', numberOfVender:3, message:'Venders near you'},
            {items:'RO Water Supply', numberOfVender:5, message:'Venders near you'},
            {items:'AC Repair', numberOfVender:8, message:'Venders near you'},
            {items:'Gas Stove Repair', numberOfVender:5, message:'Venders near you'},
        ]
    }

    render() {
       const {Categories} = this.state;
        return(
            <React.Fragment>
                <div className="home">
                    <div className="find_any">
                        <div className="findItem">
                            <span className="Search">
                                <FaSearch /></span>
                            <span className="input_value">
                                <input type="text" 
                                name="user"
                                value=""
                                placeholder="Search Anything" 
                                />
                            </span>
                        </div>
                        <div className="location">
                            <span className="location_icons"><FaMapMarkerAlt/></span>
                            <span className="input_value">
                                <input type="text" 
                                name="user"
                                value=""
                                placeholder="Current Locations" 
                                />
                            </span>
                        </div>
                    </div>
                    <p className="category">Categories</p>
                    {Categories.map((num,index) =>(
                        <HomeCom  
                        Categories={num} 
                        key={num.items}
                        index={index}
                        handleVender={this.handleVenders}/>
                    ))}
                </div>
                
            </React.Fragment>
        )
    }
}

export default MainComponent;