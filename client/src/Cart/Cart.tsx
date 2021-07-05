import CartItem from "../CartItem/CartItem";
import {Wrapper} from "./Cart.style";
import {CartItemType} from "../App";
import Button from "@material-ui/core/Button";
import CreateIcon from '@material-ui/icons/Create';

import React from "react";
import axios from "axios";


const Cart: any= ({cartItem, addToCart, createdFrom}) => {

    const saveItem = () => {
        console.log(cartItem);
        console.log("createdForm: ", createdFrom);
        axios.post('http://localhost:8080/api/item',
            cartItem
        ).then(r => {
            console.log(createdFrom);
            axios.get<CartItemType>('http://localhost:8080/api/itemLast').then((response) => {
                console.log(typeof response.data.id);

                createdFrom.itemId = response.data.id;
                console.log(response.data);

                axios.post('http://localhost:8080/api/createdFrom',createdFrom

                ).then(r2 => {
                    console.log(r2)
                    window.location.reload()
                }, error => {
                    console.log("error on createdFrom ");
                    console.log(error)
                })

            })
            console.log(r);

        }, error => {
            console.log(error)
        })
    };

    return (
        <Wrapper>
            <CartItem
                      item={cartItem}
                      addToCart = {addToCart}
            />

            <Button color = "primary" onClick={() => saveItem()}>
                Create
                <CreateIcon/>
            </Button>

        </Wrapper>




    )
}

export default Cart;