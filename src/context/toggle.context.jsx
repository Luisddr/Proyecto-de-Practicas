import React, { createContext, useEffect, useState} from 'react';


export const ToggleContext = createContext({
    setOpenToggle: ()=>{},
    openToggle : false,
    currentItems : [],
    setCurrentItems: ()=>{},
    itemsCount: 0,
    setItemsCount: ()=>{}
})

export const ToggleProvider = ({children}) =>{

    const [openToggle, setOpenToggle] = useState(false);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    // const[subTotal, setSubTotal] = useState(0);

    


   useEffect(()=>{
    let elementsToReduce = currentItems.map(c=>c.quantity);
            let aux = elementsToReduce.reduce((prevVal, currentVal)=>prevVal + currentVal,0);
            setItemsCount(aux)

            getSubTotal()


   },[currentItems])

    // const reduceItems = ()=>{
    //     if(currentItems.length){
    //         let elementsToReduce = currentItems.map(c=>c.quantity);
    //         console.log(elementsToReduce)
    //         let aux = elementsToReduce.reduce((prevVal, currentVal)=>prevVal + currentVal,0);
    //         setItemsCount(aux)
    //     }
    //     return
    //   }

    const getSubTotal = ()=>{
        currentItems.map(item=>{

            return item.subtotal = item.price * item.quantity
        })
    }
    
    const addItemsToBag = (product) =>{
        setCurrentItems([...currentItems, product])
    }

  
   
    const value = {openToggle, setOpenToggle, currentItems, addItemsToBag, setCurrentItems, itemsCount, setItemsCount} 
    
    return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}