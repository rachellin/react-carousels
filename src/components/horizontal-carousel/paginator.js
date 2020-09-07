import React from 'react';

export function Paginator (props) {
    return (
        <div onClick={props.onClick}>
            {props.dir == "prev" ? "<" : ">"}
        </div>
    )
}