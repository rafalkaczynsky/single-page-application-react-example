import React from 'react'

import {SideBar} from './'

export default class Portfolio extends React.Component{
    render(){
        const items = [
            {path:"/portfolio/website1", text:"Website 1"},
            {path:"/portfolio/website2", text:"Website 2"},
            {path:"/portfolio/website3", text:"Website 3"},
            {path:"/portfolio/website4", text:"Website 4"},
        ]

        return(
            <div>
                <h2>Portfolio of my recent jobs</h2>
                <SideBar items={items}/>
                <div className="portfolioContainer">
                    {this.props.children}
                </div>
            </div>              
        )
    }
}