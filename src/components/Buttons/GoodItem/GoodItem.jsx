import React from 'react'
import './goodItem.scss'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const GoodItem = ({good}) => {
    const currentGood = useSelector(state => state.good)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: 'setCurrentGood', payload: good})
        navigate(`/${good.id}`)
    }

    return (
        <div className="good" onClick={handleClick}>
            <div className="good__img">
                <div className='img' style={{ backgroundImage: `url(${good.img})` }} />
            </div>
            <h2 className='good__title'>{good.title}</h2>
            <div className='good__subinfo'>
                <h4 className='good__manufacturer'>Manufacturer: {good.manufacturer}</h4>
                <h4 className='good__category'>Category: {good.category}</h4>
            </div>
            <div className='good__info'>
                <h3 className='good__price'>{good.price}$</h3>
                <h3 className='good__date'>Date: {good.date}</h3>
            </div>
        </div>
    )
}

export default GoodItem
