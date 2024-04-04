import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = 'live_wMXO0fhCn0DAk7gRN9u8iOaW539wVFyhRkPCJCrWFFbikVwe7YimQzQFFJ0ENP5c';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    }
};

export const dogsApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers
        }
    }),
    endpoints: (builder) => {
        return {
            fetchBreeds: builder.query<Breed[], number|void>({
                query: (limit=10)=>{
                    return `/breeds/?limit=${limit}`;
                }
            })
        }
    }
})

export const {useFetchBreedsQuery} = dogsApiSlice;