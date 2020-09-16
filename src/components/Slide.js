import React, { useEffect } from 'react';




const Slide = ({slides, count, children}) => {

    useEffect(() => {
        slides(document.querySelectorAll(".slide"));
    }, [])
    return (
        <div className="slide">
            {children}
        </div>

    )
}


export default Slide;