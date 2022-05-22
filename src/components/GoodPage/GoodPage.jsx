import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import EditGood from '../EditGood/EditGood';

const GoodPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const good = useSelector(state => state.good.currentGood)

    const edit = () => {
        console.log(1)
        setPopUpActive(true)
    }

    const [popUpActive, setPopUpActive] = useState()

    const deleteGood = () => {
        dispatch({type: 'DELETE_GOOD', payload: good})
        navigate(`/`)
    }

  return (
    <div className="good-page" style={{padding: '1rem'}}>
        <div className="good active">
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
        <div className='good-page__description'>{good.description}</div>
        <div className="good-page__buttons">
            <button onClick={edit}>Редактировать</button>
            <button onClick={deleteGood}>Удалить</button>
        </div>
        <EditGood active={popUpActive} setActive={setPopUpActive}/>
    </div>
  )
};

export default GoodPage;
