import React from 'react';
import {Link} from 'react-router-dom';
import "./carousel-css.css"

export default function OneBlock(props) {
    return (
        <div className="block-style">
            <span>
                <Link  to={`${process.env.PUBLIC_URL}/${props.linkPath}`}>
                    <img src={props.imagePath} height="60px"/>   
                </Link>
            </span>
            <span style={{textAlign:"center"}}>    
                <small >{props.quickName}</small>
            </span>    
            
            
        </div>    
    )
}

