import React from 'react';

export function Arrow (props) {
    return (
        <div onClick={props.onClick}>
            {props.dir == "prev" ? "<" : ">"}
        </div>
    )
}