import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootStateType } from '../store/store';
import type { CategoryResponseType } from '../types/response';
import categorySlice, { categorySliceActions } from '../store/reducers/categorySlice';


export const categoriesApi = createApi({
    reducerPath: 'categorySerivce',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/',
        prepareHeaders: (headers, { getState }) => {
            const token = ""; // (getState() as RootStateType).user.auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
        },
    }),
    endpoints: (builder) => ({
        getCategories: builder.query<CategoryResponseType, number>({
            query: (page) => `getCategories?page=${page}`,
            async onQueryStarted(page, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled; 
                dispatch(categorySliceActions.addData(data.data));
                
                if(page != 1) {
                    dispatch(categorySliceActions.setPagination({ 
                        pageCount: data.meta.pagination.pageCount,
                        total: data.meta.pagination.total
                    }));
                }
            },
            transformResponse: (value: CategoryResponseType, meta) => {
                return value;
            }
        })
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;
export default categoriesApi;