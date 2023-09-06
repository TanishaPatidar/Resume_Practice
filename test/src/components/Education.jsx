import React from "react";    


function Education({education}){
   return(
    <>
    <h3>Education</h3>
    <ul>
    
      {education.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <hr></hr>
        
    
    </>
   ); 

}
export default Education;