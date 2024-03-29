import React, { useState } from "react";



function Formcr(){

const[inputData,setInputData]=useState({phone:"+91",email:"@gmail.com",country:"India"});

function handleChange(e){
    const name=e.target.name
    const value=e.target.value
    console.log(name,value)
setInputData((prviousState)=>{
return {...prviousState,[name] :value}
})
}
function handleSubmit(e){
    e.preventDefault();
    console.log('current state',inputData)
}
return(
    <>
    <form onSubmit={handleSubmit}>
    <label>Enter your name : <input type="text" name="name" onChange={handleChange}></input></label><br/>
    <label>Enter your age : <input type="text" name="age" onChange={handleChange}></input></label><br/>
    <label>Enter your email : <input type="text" name="email" onChange={handleChange} value={inputData.email}></input></label><br/>
    <label>Enter your phone number : <input type="text" name="phone" onChange={handleChange} value={inputData.phone}></input></label><br/>
    <label>select your country : <select type="text" name="country" onChange={handleChange} value={inputData.country}>
        <option value="select">select</option>
        <option value="india">India</option>
        <option value="Australia">Australia</option>
        <option value="China">China</option>
        <option value="japan">Japan</option>
        </select></label><br/>
    <input type="submit" value="submit form"/>
    </form>
    </>
)

}
export default Formcr;