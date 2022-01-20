import {createStore, combineReducers} from 'redux'
import {goodsReducer} from './goodsReducer'
import {goodsSlice} from './goodsSlice'

const rootReducer = combineReducers({
    goods: goodsReducer,
    good: goodsSlice,
})

export const store = createStore(rootReducer)


