import React from "react";
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <li className="navbar-item">
            <Link to={props.To} className="nav-link" onClick={props.OnClick}>{props.LinkTitle}</Link>
        </li>
    );
}