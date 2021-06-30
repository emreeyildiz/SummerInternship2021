import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

//Types

import {CartItemType} from "../App";

import {Wrapper} from "./Item.style";
import { Keyboard } from '@material-ui/icons';
type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleAddToCartTitle: (clickedItem: CartItemType) => void;
    handleAddToCartDescription: (clickedItem: CartItemType) => void;
    handleAddToCartPrice: (clickedItem: CartItemType) => void;
}
const StyledButton = withStyles({
    root: {
      //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
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
          {Object.keys(data.item).map(function(key, index) {
            if (index != 0)
            return(
            <li><StyledButton onClick = {() =>data.handleAddToCart(data.item, index, key)}>{key}: {data.item[key]}</StyledButton></li>
            )
            })}
    </Wrapper>


)
export  default Item;