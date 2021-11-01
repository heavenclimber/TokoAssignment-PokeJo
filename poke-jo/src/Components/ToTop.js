import React, { useEffect, useState } from 'react'

export default function ToTop() {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <a onClick={scrollToTop} className={scroll ? "show" : null} id="topbutton"></a>
    )
}

