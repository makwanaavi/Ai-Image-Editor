"use client"
import React, { useEffect, useState } from 'react'

export default UseParallax = () => {
    const [scrollY, setScrollY] = useState()

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll) ;
    }, [])

    return scrollY
}


