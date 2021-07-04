import Button from '@material-ui/core/Button'

import {CartItemType} from '../App'

import {Wrapper} from './CartItem.style'
import React from "react";
import { Grid } from '@material-ui/core';


const CartItem: any = ({item}) => (

    <Wrapper>
            {console.log(JSON.stringify(item))}

        <h2> Core </h2>

        <ul>
            {Object.keys(item.core).map((sub,index)=>
                <li>
                    <li>{sub}: {item.core[sub]}</li>

                    {/*{sub} : {data.item.core[sub]}*/}
                </li>
            )}

        </ul>
        <h2> Status </h2>

        <ul>
            {Object.keys(item.status).map((sub, index)=>
                <li>
                    <li>{sub}: {item.status[sub]}</li>

                </li>
            )}

        </ul>
        <h2> Type </h2>

        <ul>
            {Object.keys(item.type).map((sub, index)=>
                <li>
                    <li>{sub}: {item.type[sub]}</li>

                </li>
            )}

        </ul>
        <h2> SourceList </h2>

        <ul>
            {(item.sourceList).map((sub, index)=>
                    <li>{sub}</li>
            )}

        </ul>



        {/*<h1>{data.item.sourceList}</h1>*/}
        {/*<h1>{data.item.core.name}</h1>*/}

    </Wrapper>



);



export default CartItem;