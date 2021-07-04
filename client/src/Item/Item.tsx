import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
//Types

import {CartItemType} from "../App";

import {Wrapper} from "./Item.style";
type Props = {
    item: CartItemType;
    handleAddToCartCore: (clickedItem: any) => void;
}
const StyledButton = withStyles({
    root: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: '#0f3c54',
      height: 7,
      padding: '20px 0px',
      fontSize: 14,

      //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const Item: any = (data) => (
   <Wrapper>

       <h2> Core </h2>

       <ul>
           {Object.keys(data.item.core).map((sub,index)=>
           <li>
               <li><StyledButton onClick = {() =>data.handleAddToCart(data.item,data.item.core, "core", sub)}>{sub}: {data.item.core[sub]}</StyledButton></li>

               {/*{sub} : {data.item.core[sub]}*/}
           </li>
           )}

       </ul>
       <h2> Status </h2>

       <ul>
           {Object.keys(data.item.status).map((sub, index)=>
               <li>
                   <li><StyledButton onClick = {() =>data.handleAddToCart(data.item,data.item.status, "status", sub)}>{sub}: {data.item.status[sub]}</StyledButton></li>

               </li>
           )}

       </ul>
       <h2> Type </h2>

       <ul>
           {Object.keys(data.item.type).map((sub, index)=>
               <li>
                   <li><StyledButton onClick = {() =>data.handleAddToCart(data.item,data.item.type, "type", sub)}>{sub}: {data.item.type[sub]}</StyledButton></li>

               </li>
           )}

       </ul>
       <h2> SourceList </h2>

       <ul>
           {(data.item.sourceList).map((sub, index)=>
               <li>
                   <li><StyledButton onClick = {() =>data.handleAddToCart(data.item,data.item.sourceList, "sourceList", sub)}>{sub}</StyledButton></li>

               </li>
           )}

       </ul>

       {/*<h1>{data.item.sourceList}</h1>*/}
       {/*<h1>{data.item.core.name}</h1>*/}

    </Wrapper>


)
export  default Item;