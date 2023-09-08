import React from "react";

function Experience({mydata}){

    return(
        <>
        <h3>Experience</h3>
        {mydata.map((listItem,listIndex) => (
          <ul key={listIndex} style={{listStyleType:"none"}}> 
            {Object.keys(listItem).map((item, index) => (
              <li key={index} >✅{listItem[item]}</li> 
            ))}
          </ul>
        ))}
        <hr />
      </>
        
    );
}
export default Experience;