import { useState } from "react";

export const useData =()=>{
    const[data,setIndata]=useState([]);    
    return { data,setIndata}
}