import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

import '../PopUp/popUp.scss';

const EditGood = ({ active, setActive}) => {
  const navigate = useNavigate()
  const date = new Date()

  const good = useSelector(state => state.good.currentGood)
  
  const defaultValues = {
    title: good.title,
    category: good.category,
    manufacturer: good.manufacturer,
    price: good.price,
    description: good.description,
    date: good.date,
    img: good.img,
    id: good.id
  }

  const [values, setValues] = useState(defaultValues)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values, 
      [name]: value,
    })
  }

  const dispatch = useDispatch()

  const editGood = () => {
    dispatch({type: 'EDIT_GOOD', payload: values})
  }

  const submit = (e) => {
    e.preventDefault()
    editGood()
    setActive(false)
    setTimeout(navigate(`/`), 1000)
  }

  return (
    <div className={active ? "pop-up active" : "pop-up"} onClick={() => setActive(false)}>
      <div className={active ? "pop-up__body active" : "pop-up__body"} onClick={e => e.stopPropagation()}>
        <form action="#">
            <h2>Редактирование товара</h2>

            <label>
              <span>Наименвание товара:</span>
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

            {values.title && values.price 
              ? (<input   type="submit" 
                          onClick={(e) => submit(e)} 
                          value='Редактировать'/>)
              : <></>}

            
        </form>
      </div>
  </div>
  )
}

export default EditGood;
