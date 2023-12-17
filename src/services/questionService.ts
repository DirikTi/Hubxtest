import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { QuestionResponseType } from '../types/response';
import { API_URL } from '../utils/utils';

export const questionApi = createApi({
    reducerPath: 'questionSerivce',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = "";

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
        },
    }),
    endpoints: (builder) => ({
        getQuestions: builder.query<QuestionResponseType[], void>({
            query: () => "getQuestions",
        })
    }),
});

export const { useGetQuestionsQuery } = questionApi;