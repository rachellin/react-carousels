import React from 'react';
import { StyledPaginator } from './style';
import 'remixicon/fonts/remixicon.css';

export function Arrow (props) {
    return (
        <StyledPaginator onClick={props.onClick} clickable={props.clickable}>
            {props.dir == "prev" ? <i className="ri-arrow-left-s-line"></i> : <i className="ri-arrow-right-s-line"></i>}
        </StyledPaginator>
    )
}