import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h1><Link to="/"><img src="./images/logohead.png"></img></Link></h1>

            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="foto">Фото</Link></li>
                <li><Link to="about">Контакты</Link></li>
                <li><Link to="test">Тест</Link></li>
            </ul>
        </header>
    )

    
}

export default Header;