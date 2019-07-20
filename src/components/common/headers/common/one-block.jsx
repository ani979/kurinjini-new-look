import React from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from 'react-tooltip'

export default function OneBlock(props) {
    return (
        <div>
            <Link  to={`${process.env.PUBLIC_URL}/${props.linkPath}`}>
                <img src={props.imagePath} height="80px"/>   
            </Link>
            
            
        </div>    
    )
}

