
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     storeItems: []
// }

// export const storeSlice = createSlice({
//     name: 'store',
//     initialState,
//     reducers:{
//         addItems: (state,action) => {
//             state.storeItems.push(action.payload) 
//             localStorage.setItem("cartItems", JSON.stringify(state.storeItems));
//         },

//         removeItems: (state,action) => {

//             const deleteIndex = state.storeItems.findIndex(item => item?.card?.info?.id === action.payload)

//             if(deleteIndex !== -1){
//                 state.storeItems.splice(deleteIndex,1)
//             }
//         },

//         clearCart: (state,action) => {
//             state.storeItems.length = 0
//         }
//     }
// })

// export const {addItems, removeItems, clearCart} = storeSlice.actions

// export default storeSlice.reducer


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    storeItems: JSON.parse(localStorage.getItem("cartItems")) || [] // Load from localStorage if available
};

export const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.storeItems.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.storeItems)); // Sync with localStorage
        },

        removeItems: (state, action) => {
            const deleteIndex = state.storeItems.findIndex(item => item?.card?.info?.id === action.payload);
            if (deleteIndex !== -1) {
                state.storeItems.splice(deleteIndex, 1);
                localStorage.setItem("cartItems", JSON.stringify(state.storeItems)); // Sync with localStorage
            }
        },

        clearCart: (state, action) => {
            state.storeItems.length = 0;
            localStorage.setItem("cartItems", JSON.stringify(state.storeItems)); // Sync with localStorage
        }
    }
});

export const { addItems, removeItems, clearCart } = storeSlice.actions;

export default storeSlice.reducer;