import React from "react";
import "./App.css";
import Resume from "./components/Resume"
import Border from "./components/Border";
import Button from "./components/Button";

function App(){
  return(
    <>
    <h1>Hi</h1>
    <Border>
       <Resume/>
    </Border>
    <Button/>
   
    </>

  );

}
export default App;

