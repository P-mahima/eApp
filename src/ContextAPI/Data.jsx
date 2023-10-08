import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext()
const Data = () => {
    const[data , setData] = useState('')

    useEffect(() => {
        axios('http://localhost:3004/route/data')
        .then(res => setData(res.data))
        .catch((err) => console.log(err))
    })

    return(
        <div>
            <StoreContext.Provider value={[data, setData]}>
                
            </StoreContext.Provider>
        </div>
    )
}