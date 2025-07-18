import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import ChatSlice from './ChatSlice';


const store = configureStore({
    reducer: {
        app: appSlice,
        Chat: ChatSlice,
    },
});

export default store;
