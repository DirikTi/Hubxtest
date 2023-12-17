
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { questionApi } from '../services/questionService';

export const store = configureStore({ 
    reducer: {
        [questionApi.reducerPath]: questionApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionApi.middleware),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootStateType = ReturnType<typeof store.getState>