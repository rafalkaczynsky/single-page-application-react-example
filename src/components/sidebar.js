import React from 'react'
import {Link} from 'react-router'

export default class SideBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const listItems = this.props.items.map((item, index) =>
            <li key={index}><Link to={item.path} activeClassName="activePortfolioList" >{item.text}</Link></li>
        );

        return(
            <div className="sideBarContainer">
                <ul className="sideBar">
                    {listItems}
                </ul>
            </div>
        )
    }
}