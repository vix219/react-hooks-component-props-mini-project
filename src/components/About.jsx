import React from "react";


// image="https://via.placeholder.com/215"
function About({image="https://via.placeholder.com/215", about}) {
    
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;
