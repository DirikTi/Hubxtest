import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootStateType } from '../store/store';
import type { CategoriesResponseType } from '../types/response';

export const categoriesApi = createApi({
    reducerPath: 'categories',
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
        getCategories: builder.query<CategoriesResponseType[], void>({
            query: () => "getCategories",
        })
    }),
});

export const { useGetCategoriesQuery } = categoriesApi;