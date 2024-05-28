// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import pricingReducer from './pricingSlice';

const store = configureStore({
    reducer: {
        pricing: pricingReducer,
    },
});

export default store;
