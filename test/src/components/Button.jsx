function Button(){
  const  btnStyle={
    backgroundColor: "red",
    color: "white",
    borderRadius:"1rem",
    border:"1px solid red",
    padding:"12px"
    }


    function handleClick(e){
        e.target.style.display="none"
        window.print();
        e.target.style.display="block"

    }
    return(
        <>
        <button style={btnStyle} onClick={handleClick}>Print</button>
        </>
    );

}
export default Button;