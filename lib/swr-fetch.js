//@ts-check

import useSWR from 'swr'

async function fetcher(url){
    const res = await fetch(url);
    return  res.json();
}

export const useDataBatik = (bwi) => {
    //url
    const url = "http://localhost:3000/api/dt-batik";
    //data dan error
    const {data, error} = useSWR(url, fetcher, {initialData: bwi ,refreshInterval: 1000});

    return {data, error}
}