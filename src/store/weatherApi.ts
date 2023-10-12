import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (build) => ({
        getWeather: build.query({
            query: (city:string) => `weather?${city&&`q=${city}`}&lang=ru&appid=1facf7d94b02bdc871690a8b2bd9cc42&units=metric`
        })
    })
})

export const { useGetWeatherQuery } = weatherApi;