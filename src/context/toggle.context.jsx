import React, { createContext, useState} from 'react';


export const ToggleContext = createContext({
    setOpenToggle: ()=>{},
    openToggle : false,
    currentItems : [],
    setCurrentItems: ()=>{}
})

export const ToggleProvider = ({children}) =>{

    const [openToggle, setOpenToggle] = useState(false)
    const [currentItems, setCurrentItems] = useState([])

    
    
    
    const addItemsToBag = (product) =>{
        setCurrentItems([...currentItems, product])
    }
   
    const value = {openToggle, setOpenToggle, currentItems, addItemsToBag, setCurrentItems} 
    
    return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}