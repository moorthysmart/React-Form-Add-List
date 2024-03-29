import React, { useState } from "react";


function Listdata(){

    const[list,setList] =useState([]);
    const[count,setCount] =useState(1);

    function addListItem(){
        const itemName ='item'+count;
    setCount((prviousState)=>{
        return prviousState+1
    })
    setList((prviousState) =>{
        return [...prviousState,itemName]
    })
    }
    
        return(
            <>
            <h2>List</h2>
                <button onClick={addListItem}>Add Item</button>
                    <ul>
                        {
                            list.map((el,index)=><li key={index}>{el}</li>)
                        }
                    </ul>
            </>
        );

}

export default Listdata;