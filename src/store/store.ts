
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { questionApi } from '../services/questionService';
import { categoriesApi } from '../services/categoryService';

export const store = configureStore({ 
    reducer: {
        [questionApi.reducerPath]: questionApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(questionApi.middleware, categoriesApi.middleware),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootStateType = ReturnType<typeof store.getState>