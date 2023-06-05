import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return <footer className='footer'>
        <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="foto">Фото</Link></li>
        <li><Link to="about">Контакты</Link></li>
        </ul>

        <ul>
            <div>8 (xxx) xxx-xx-xx</div>
            <div>tozstat@yandex.ru</div>
        </ul>
        
        <h1><Link to="/"><img src="./images/logohead.png"></img></Link></h1>
    </footer>

    
}

export default Footer;