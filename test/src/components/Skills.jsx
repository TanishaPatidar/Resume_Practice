import React from "react";

function Skills({skills}){
    const[s1,s2,s3]=skills;
    return(
        
        <>
        <h3>Skills</h3>
    {
      skills.length>0&&
      (
        <ul>
            <li>{s1}</li>
            <li>{s2}</li>
           <li>{s3}</li>
           <hr />

        </ul>
        
        )
    }
    </>
);
   
}
export default Skills;