import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    
    return (
        <div>
            <h3 className='link'><Link to='/'>Home</Link> </h3>
            <h3 className='link'><Link to='/jokes'>Jokes</Link> </h3>
        </div>
    )
}

export default Header;