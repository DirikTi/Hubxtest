// slices/dataSlice.js
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CategoryType } from '../../types/response';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        items: [],
        page: 0,
        total: 0,
        pageCount: 0
    } as {
        items: CategoryType[]
        page: number
        total: number
        pageCount: number
    },
    reducers: {
        addData: (state, action: PayloadAction<CategoryType[]>) => {
            state.items = [...state.items, ...action.payload];
            state.page += 1;
        },
        setPagination: (state, action: PayloadAction<{ total: number, pageCount: number }>) => {
            const { total, pageCount } = action.payload;
            state.pageCount = pageCount;
            state.total = total
        }
    },
});

export const categorySliceActions = categorySlice.actions;
export default categorySlice;
