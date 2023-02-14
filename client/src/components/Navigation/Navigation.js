import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/wizards/:id">Wizards</Link>
            <Link to="/leaderboard">Leaderboard</Link>
        </nav>
    )
}

export default Navigation