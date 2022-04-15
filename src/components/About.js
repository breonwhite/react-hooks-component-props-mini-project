import React from "react";

function About({
    image = "https://via.placeholder.com/215",
    imageAlt = "blog logo",
    about, 
}) {
    return (
        <aside className="about">
            <img src={image} alt={imageAlt} />
            <p>{about}</p>
        </aside>
    );
}

export default About;