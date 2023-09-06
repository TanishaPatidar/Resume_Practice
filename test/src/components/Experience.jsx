import React from "react";

function Experience({year,role,company}){

    return(
        
        <>
       <h3>Experience</h3>
       <ul>
        <li>{year}</li>
        <li>{role}</li>
        <li>{company}</li>
       </ul>
       <hr></hr>
        </>
        
    );
}
export default Experience;