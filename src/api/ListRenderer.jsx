import React from 'react'

function ListRenderer(props) {
    //console.log("props ", Array.isArray(props));
    if(Array.isArray(props.items)) { 
        return (<ul>
            {props.items.map(function (item) {
                return <li> {item}</li>;
            })}
        </ul>);
    } else {
        return props.items;
    }
}

export default ListRenderer