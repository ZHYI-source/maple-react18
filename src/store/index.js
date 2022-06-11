import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './models/counterSlice'


const store = configureStore({
    reducer: {
        //引入所有reducer模块
        counter: counterReducer,
    }
})

export default store