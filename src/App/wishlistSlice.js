import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: JSON.parse(localStorage.getItem('wishlistItems')) || [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            if (!existingItem) {
                state.items.push(item);
            }
            localStorage.setItem('wishlistItems', JSON.stringify(state.items));
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('wishlistItems', JSON.stringify(state.items));
        },
        clearWishlist(state) {
            state.items = [];
            localStorage.removeItem('wishlistItems');
        },
    },
});

export const { addItem, removeItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
