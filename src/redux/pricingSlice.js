import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageviews: 0,
    price: 0,
    isYearly: false,
};

const pricingSlice = createSlice({
    name: 'pricing',
    initialState,
    reducers: {
        setPageviews: (state, action) => {
            state.pageviews = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        toggleBilling: (state) => {
            state.isYearly = !state.isYearly;
        },
        updatePrice: (state) => {
            const basePrice = 16;
            const calculatedPrice = (state.pageviews / 100000) * basePrice;
            state.price = state.isYearly ? (calculatedPrice * 0.75).toFixed(2) : calculatedPrice.toFixed(2);
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { setPageviews, setPrice, toggleBilling, updatePrice, toggleTheme } = pricingSlice.actions;
export default pricingSlice.reducer;
