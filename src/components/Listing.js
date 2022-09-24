import React, { useState,useRef,useEffect } from 'react'

import { MdEditNote } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Listing = ({data,edit, delte}) => {
    
  
    var da={...data}
   
   
    
    
  return (
    <div className='g312 g3'>
        <div className='card'>
        {Object.values(da).map((user,i) => (
        <div key={i} className="c1">
        
     <h2>{user.note}</h2><p className='address'>{user.category}</p>
        <MdEditNote onClick={()=>{edit(i)}}/><MdDeleteForever onClick={()=>delte(i)}/>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default Listing