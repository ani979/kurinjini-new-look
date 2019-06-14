import React, { PropTypes } from 'react'
import './aboutus.css'

function Card(props) {
    return (
        <div className="aboutus-card">
            <div>
                <div className="content">
                    <div>
                        <h2 className="title">{props.title}</h2>
                        <div className="excerpt"><p>{props.excerpt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card