import CartItem from "../CartItem/CartItem";
import {Wrapper} from "./Cart.style";
import {CartItemType} from "../App";
import Button from "@material-ui/core/Button";
import CreateIcon from '@material-ui/icons/Create';
import { StyledButton } from "../App.style";
import React from "react";
import axios from "axios";
import ItemService from "../services/ItemService";

type Props = {
    //cartItems: CartItemType[];
    cartItem: CartItemType;
    addToCart: (clickedItem: CartItemType, propID) => void; //Adding to Cart
};



const Cart: any= ({cartItem, addToCart, createdFrom}) => {

    const saveItem = () => {
        if(!cartItem.feature1){
            return alert("Feature 1 must be selected");
        }
        axios.post('http://localhost:8080/api/item',
            cartItem
        ).then(r => {
            console.log(r);
        })
        console.log(createdFrom);
    };

    return (
        <Wrapper>
            <h2> Result Object </h2>
            <CartItem key = {cartItem.idx}
                      item={cartItem}
                      addToCart = {addToCart}
            />

            {/*<Button color = "primary" onClick={() => {cartItem.title === "" ? alert("Title must be selected") : alert("item is created")}}>*/}
            {/*    Create*/}
            {/*    <CreateIcon/>*/}
            {/*</Button>*/}

            <Button color = "primary" onClick={() => saveItem()}>
                Create
                <CreateIcon/>
            </Button>

        </Wrapper>




    )
}

export default Cart;