import React, {useContext, useEffect, useState} from 'react';
import { ToggleContext } from '../../context/toggle.context';
import {ReactComponent as Bag} from '../../assets/shopping-bag.svg'
import './shopping-bag.styles.scss'

function ShoppingBag() {

    const {openToggle ,setOpenToggle, itemsCount} = useContext(ToggleContext)

    const toggleBag = ()=> setOpenToggle(!openToggle)


    return ( 
        <div className='cart-icon-container' onClick={toggleBag} >
            <Bag className='shopping-icon' />
            <span className='item-count' >{itemsCount}</span>
        </div>
     );
}

export default ShoppingBag;