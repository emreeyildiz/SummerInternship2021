import {Wrapper} from './CartItem.style'
import React from "react";


const CartItem: any = ({item}) => (

    <Wrapper>

        <h2> Core </h2>

        <ul>
            {Object.keys(item.core).map((sub,index)=>
                    <li key = {index} > {sub}: {item.core[sub]}</li>

            )}

        </ul>
        <h2> Status </h2>

        <ul>
            {Object.keys(item.status).map((sub, index)=>
                    <li key = {index} >{sub}: {item.status[sub]}</li>

            )}

        </ul>
        <h2> Type </h2>

        <ul>
            {Object.keys(item.type).map((sub, index)=>
                    <li  key = {index} >{sub}: {item.type[sub]}</li>

            )}

        </ul>
        <h2> SourceList </h2>

        <ul>
            {(item.sourceList).map((sub, index)=>
                    <li  key = {index} >{sub}</li>
            )}

        </ul>

    </Wrapper>



);



export default CartItem;