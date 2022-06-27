import React, { createContext, useState} from 'react';


export const ToggleContext = createContext({
    setOpenToggle: ()=>{},
    openToggle : false
})

export const ToggleProvider = ({children}) =>{

    const [openToggle, setOpenToggle] = useState(false)

    const value = {openToggle, setOpenToggle} 

    return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}