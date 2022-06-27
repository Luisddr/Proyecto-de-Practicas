import React, {useContext} from 'react';
import { ToggleContext } from '../../context/toggle.context';
import {ReactComponent as Bag} from '../../assets/shopping-bag.svg'
import './shopping-bag.styles.scss'

function ShoppingBag() {

    const {openToggle ,setOpenToggle} = useContext(ToggleContext)

    const toggleBag = ()=> setOpenToggle(!openToggle)

    return ( 
        <div className='cart-icon-container' onClick={toggleBag} >
            <Bag className='shopping-icon' />
            <span className='item-count' >0</span>
        </div>
     );
}

export default ShoppingBag;