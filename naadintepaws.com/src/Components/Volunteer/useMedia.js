import { useState, useEffect } from 'react';

const useMedia = (queries, values, defaultValue) => {
    const match = () => values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
    const [value, set] = useState(match);

    useEffect(() => {
        const handler = () => set(match);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    return value;
};

export default useMedia;