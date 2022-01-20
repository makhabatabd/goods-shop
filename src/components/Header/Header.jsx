import React from 'react'
import './header.scss'

import {Link} from 'react-router-dom'; 

const header = () => {
    return (
        <header>
            <div className='container'>
                <div className="body">
                    <div className="logo">
                        <Link to="/">Shop</Link>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='laptops'>Ноутбуки</Link>
                            </li>
                            <li>    
                                <Link to='smartphones'>Смартфоны</Link>
                            </li>
                            <li>
                                <Link to='gpu'>Видеокарты</Link>  
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default header
