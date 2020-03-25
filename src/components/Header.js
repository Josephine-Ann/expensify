import React from 'react';

import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="isActive" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="isActive" to="/create">Create an expense</NavLink>
        <NavLink activeClassName="isActive" to="/help">Help</NavLink>
    </header>
);

export default Header;

