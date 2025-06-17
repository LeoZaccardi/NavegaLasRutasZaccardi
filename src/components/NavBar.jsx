import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 2rem', background: '#1b1a1b', color: 'white', height:'60px', width:'100vw', boxSizing:'border-box', position:'fixed', top:0, left:0}}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/public/logoE.png" alt="SoundSec Logo" style={{height: '48px', objectFit:'contain'}} />
                <h2 style={{ margin: 0, fontSize: '1.5rem' }}></h2>
            </Link>  
            <div style={{ display: 'flex', gap: '1rem' }}>              
                <Link to="/categoria/auriculares" className="nav-link">Auriculares</Link>
                <Link to="/categoria/parlantes" className="nav-link">Parlantes</Link>
                <Link to="/categoria/amplificador" className="nav-link">Amplificador</Link>
                <Link to="/categoria/dac" className="nav-link">DACs</Link>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;