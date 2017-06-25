import React from 'react'

import Image from './image'

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Image />
                <p>Single Page Application created with React by <strong>Rafal Kaczynsky</strong></p>
            </div>
        )
    }
}