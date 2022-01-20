import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './popUp.scss';

const PopUp = ({active, setActive}) => {
  const defaultValues = {
    title: '',
    category: 'Laptop',
    manufacturer: 'Apple',
    price: '',
    description: '',
    date: '2022-01-01',
    img: '/goods/newGood.png',
    id: id
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [values, setValues] = useState(defaultValues)
  const goods = useSelector(state => state.goods)
  const date = new Date()
  const id = goods.length + 1
  
  const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values, 
      [name]: value,
    })
  }

  const addGood = () => {
    dispatch({type: 'ADD_GOOD', payload: values})
    dispatch({type: 'setCurrentGood', payload: values})
  }

  const submit = (e) => {
    e.preventDefault()
    addGood()
    setActive(false)
    setTimeout(() => {
      navigate(`/${id}`)
    }, 1200);  
  }

  return (
    <div className={active ? "pop-up active" : "pop-up"} onClick={() => setActive(false)}>
      <div className={active ? "pop-up__body active" : "pop-up__body"} onClick={e => e.stopPropagation()}>
        <form action="#">
            <h1>Добавление товара</h1>
            <label>
              <h2>Наименвание товара:</h2>
              <input  name='title' 
                      value={values.title}
                      onChange={handleInputChange} 
                      type="text" 
                      required 
                      placeholder='Apple Mackbook'/>
            </label>
            <label>
              <span>Категория товара:</span>
              <select  name='category' 
                      value={values.category}
                      onChange={handleInputChange}
                      required >

                        <option value="Laptop">Laptop</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Gpu">Gpu</option>

              </select>
            </label>
            <label>
              <span>Производитель товара:</span>
              <select  name='manufacturer'
                      value={values.manufacturer}
                      onChange={handleInputChange}
                      required >

                        <option value="Apple">Apple</option>
                        <option value="Acer">Acer</option>
                        <option value="Google">Lenovo</option>
                        <option value="GeForce">GeForce</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Sapphire">Sapphire</option>
                        <option value="Soviet Union">Soviet Union</option>  

              </select>
            </label>
            <label>
              <span>Цена товара:</span>
              <input  name='price' 
                      value={values.price}
                      onChange={handleInputChange}
                      type="number" 
                      min={0}
                      required min={0} 
                      placeholder='500'/>
            </label>
            <label>
              <span>Описание товара:</span>
              <textarea name='description' 
                        value={values.description}
                        onChange={handleInputChange}
                        type="text" 
                        maxLength={100}></textarea>
            </label>
            <label>
              <span>Дата поступления товара:</span>
              <input  name='date' 
                      value={values.date}
                      onChange={handleInputChange}
                      type="date" 
                      max={date} 
                      required/>
            </label>
            <input  name='id' 
                    type="hidden" 
                    value={id} />

            <input  name='img'
                    type='hidden'
                    value="/goods/newGood.png" />

            {values.title && values.price 
              ? (<input type="submit" onClick={(e) => submit(e)} />)
              : <></>}
            
        </form>
      </div>
  </div>
  )
}

export default PopUp;
