import React from "react";

import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const data={
    expdata :[{year:2012, company:'xyz', role:'something'},{year:2015, company:'abc', role:'something'}],
    skillsdata:['react','javascript','c#'],
    edudata:['Wilton High School',
        'Silvermine School of Arts ', 'Codeacademy']

}
function Resume(){
    return(
    <>
    {/* <Experience year={data.expdata[0].year} company={data.expdata[0].company} role={data.expdata[0].role}/>
    <Experience year={data.expdata[1].year} company={data.expdata[1].company} role={data.expdata[1].role}/> */}
    <Experience mydata={data.expdata}/>
    <Education education={data.edudata}/>
    <Skills skills={data.skillsdata}/>
  
    </>
    );

}
export default Resume;