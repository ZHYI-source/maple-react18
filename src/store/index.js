import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './models/todosSlice'


const store = configureStore({
    reducer: {
        //引入所有reducer模块
        todos: todosReducer,
    }
})

export default store