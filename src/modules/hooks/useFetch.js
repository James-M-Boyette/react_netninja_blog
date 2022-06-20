import { useState, useEffect } from "react";

const useFetch = (url) => {
    // Note: our custom Hook has been named *use*Fetch - the syntax React requires in order to actually recognize the function as a Hook...
    const [data, setData] = useState(null); // Changed from the more-specific 'blogs / setBlogs' to the more ubiquitous 'data / setData' ... because whenever we fetch data, we'll want to use this custom Hook, now
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            // Here, we're simulating the delay our browser would experience while waiting to receive data ...
            fetch(url) // Here, we've swapped-out our hard-coded url for a parameter - which will allow us, again, to use this Hook all over the place ... always able to pass a given endpoint to the custom Hook
                .then((res) => {
                    // console.log(res);

                    if (!res.ok) {
                        throw Error(
                            "😥 Could not fetch the data for that resource ..."
                        );
                    }
                    return res.json();
                })
                .then((responseData) => {
                    setData(responseData); // Now, we're making our Hook's 'data' variable hold the response's data ...
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    console.log("Network Error:", error.message);
                    setIsPending(false);
                    setError(error.message);
                });
        }, 2000);
    }, [url]); // We add the param 'url' as a dependancy in order to make sure that this Hook runs *every time* the url changes ...

    return { data, isPending, error }; // Remember that, even though this is an object, bc we're choosing to name K & V the same, we only need to write them once
};

export default useFetch;
