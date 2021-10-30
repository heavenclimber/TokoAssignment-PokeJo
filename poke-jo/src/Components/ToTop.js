import React from 'react'

export default function ToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <a onClick={scrollToTop} id="topbutton"></a>
    )
}

