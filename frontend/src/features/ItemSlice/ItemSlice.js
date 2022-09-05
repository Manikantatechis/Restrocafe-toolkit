import {createSlice} from '@reduxjs/toolkit'

const itemSlice= createSlice({
    name: 'item',
    initialState: {list:[]},
    reducers: {
        fetchItemAction:(state, action) =>{
            state.list= action.payload
        }
    }
})
export const getItems= (state)=>state.list
export const {fetchItemAction}= itemSlice.actions
export default itemSlice.reducer