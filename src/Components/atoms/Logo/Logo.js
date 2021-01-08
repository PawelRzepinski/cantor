import React from 'react';
import { Link } from 'react-router-dom';




const Logo = (props) => (
    <Link to="/">
        <img src={props.image}  alt={'Cent24'}></img>
    </Link>
)

export default Logo;