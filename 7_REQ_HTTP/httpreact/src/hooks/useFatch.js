import { useState, useEffect } from "react";

// 4 - custom hooks

export const useFetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
        fetchData()
    }, [url])

    return {data}
}

