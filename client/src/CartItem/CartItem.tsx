import Button from '@material-ui/core/Button'

import {CartItemType} from '../App'

import {Wrapper} from './CartItem.style'
import React from "react";
import { Grid } from '@material-ui/core';


const CartItem: any = ({item}) => (
    
    <Wrapper>
        {item == null ? <h3>No item is created</h3>: null}
        <div>
            {Object.keys(item).map(function(key, index) {
                if (index != 0)
                    return(
                        <li>{key}: {item[key]}</li>
                    )
            })}
        </div>

    </Wrapper>


);



export default CartItem;