import { useCallback, useEffect, useState } from "react";

export function useRepository(repositoryMethod) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const getResponseResult = useCallback(() => {
        (async () => {
            setData(null);
            setError(null);

            try {
                const response = await repositoryMethod();
                
                setData(response);
            } catch (error) {
                setError(error);
            }
        })();
    }, [repositoryMethod]);

    useEffect(() => {
        getResponseResult();
    }, []);

    return { data, error };
}