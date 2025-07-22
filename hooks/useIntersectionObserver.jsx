


"use client"
import React, { useRef, useState, useEffect } from 'react'

const useIntersectionObserver = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [threshold]);

    return [ref, isVisible];
}

export default useIntersectionObserver;
