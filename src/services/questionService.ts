import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootStateType } from '../store/store';
import type { QuestionResponseType } from '../types/response';

export const questionApi = createApi({
    reducerPath: 'questions',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummy-api-jtg6bessta-ey.a.run.app/',
        prepareHeaders: (headers, { getState }) => {
            const token = "";// (getState() as RootStateType).user.auth.token;

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