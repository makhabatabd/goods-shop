import React from 'react'
import {Routes, Route} from 'react-router-dom'; 

import NotFound from '../NotFound/NotFound'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Laptops from '../laptops/Laptops'
import Smartphones from '../Smartphones/Smartphones'
import Gpu from '../Gpu/Gpu'
import GoodPage from '../GoodPage/GoodPage'
import Footer from '../Footer/Footer'

import './app.scss';

const App = () => {
    return (
        <div className='wrapper'>        
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="laptops" element={<Laptops />} />
                <Route path="smartphones" element={<Smartphones />} />
                <Route path="gpu" element={<Gpu />} />
                <Route path=":id" element={<GoodPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App

