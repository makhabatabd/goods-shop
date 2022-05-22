import React, { useState, useEffect } from 'react'
import './main.scss'

import { useSelector } from 'react-redux'
import _ from "lodash"

import GoodItem from '../Buttons/GoodItem/GoodItem'
import PopUp from '../PopUp/PopUp';


const pageSize = 6;
const Main = () => {
    const goods = useSelector(state => state.goods).sort( (a, b) => {
        if (new Date(a.date) > new Date(b.date)) return 1
        else if (new Date(a.date) < new Date(b.date)) return -1
        return 0
    })
    const [paginatedGoods, setPaginatedGoods] = useState()
    const [currentPage, setCurrentPage] = useState(1)   

    useEffect( () => {
        setPaginatedGoods(_(goods).slice(0).take(pageSize).value())
    }, [])

    const pageCount = goods 
        ? Math.ceil(goods.length / pageSize) 
        : 0

    const pages = _.range(1, pageCount + 1)

    const pagination = (page) => {
        setCurrentPage(page)
        const startIndex = (page - 1) * pageSize
        const paginatedGood = _(goods).slice(startIndex).take(pageSize).value()

        setPaginatedGoods(paginatedGood)
    }

    const [popUpActive, setPopUpActive] = useState(false)


    return (
        <main>
            <div className="container">
                <div className="body">
                <button className='pop-up-btn' onClick={() => setPopUpActive(true)}>Добавить товар</button>
                    <h2 className='title'>New Goods</h2>
                    <div className="main">
                        {
                            paginatedGoods 
                                ? paginatedGoods.map((good, index) => <GoodItem good={good} key={index}/>)  
                                : goods.map((good, index) => <GoodItem good={good} key={index}/>)
                        }
                    </div>
                    <nav>
                        <ul className="pagination">
                            {
                                pageCount > 1 
                                    ? pages.map(page => 
                                        (<li onClick={() => pagination(page)} key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                                            <p className='page-link'>{page}</p>
                                        </li>
                                    ))
                                    : <li className={"page-item active"}>
                                        <p className='page-link'>1</p>
                                    </li>
                            }
                        </ul>
                    </nav>
                </div>
                <PopUp active={popUpActive} setActive={setPopUpActive} />
            </div>
        </main>
    )
}

export default Main
