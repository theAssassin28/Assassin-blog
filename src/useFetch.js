import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Data not Fetched");
                }
                return res.json();
        })
        .then(data => {
            //console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError')
            {
                console.log('Fetch Aborted');
            }
            else
            {
                setIsPending(false);
                setError(err.message);
            }
            })
    });
        // console.log('Use Effect Ran');
        // console.log(name);
        return () => abortCont.abort();
    }, [url]); // [name] <- 2nd hook arguement makes sure the useEffect runs only on the first render
    
    return {data, isPending, error};
}
export default useFetch;

