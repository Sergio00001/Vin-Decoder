import { useState, useEffect } from "react"

export const useWindowWidth = () => {
    const [windowW, setWindowW] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setWindowW(window.innerWidth)
        }, 200);
    }, [])

    return { windowW }
}