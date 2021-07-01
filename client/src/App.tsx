import {useQuery} from "react-query";
import Item from'./Item/Item'
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from '@material-ui/core/Grid'
//Style
import {Wrapper, StyledButton, ButtonWrapper} from './App.style'
import FiberNewSharpIcon from '@material-ui/icons/FiberNewSharp'
import Cart from './Cart/Cart'
import "./App.css";
import React, {useState, Dispatch, useEffect} from 'react';
import {makeStyles} from "@material-ui/core";
//import list from './data/MOCK_DATA-2.json'
import axios from "axios";
export type CartItemType = {
    idx: number
}

const App =() =>{

    const [cartOpen, setCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState<CartItemType>({idx: -1});
    const [itemList, setItemList] = useState<CartItemType[]>([]);
    const [createdFrom, setCreatedFrom] = useState<CartItemType[]>([]);

    const handleAddToCart = (clickedItem: CartItemType, propID, key) => {

        setCreatedFrom({...createdFrom, [key] : clickedItem});

        setCartItem({...cartItem, [key] : clickedItem[key]});
    };

    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios.get<CartItemType[]>('http://localhost:8080/api/item')
            .then((response) => {
                console.log(response.data);
                setItemList( response.data );
            });
    }, []);


    return (
        <Wrapper>
            <Drawer anchor = 'right' open= {cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartItem = {cartItem}
                    addToCart = {handleAddToCart}
                    createdFrom = {createdFrom}
                />
            </Drawer>
            <ButtonWrapper>
                <StyledButton size = "medium" color = "secondary" onClick={() => setCartOpen(true)}>
                    <FiberNewSharpIcon/>
                </StyledButton>
            </ButtonWrapper>

            <Grid container spacing={2}>
                {itemList?.map(item => (
                    <Grid item key = {item.idx} xs ={12} sm = {3}>
                        <Item item={item }  handleAddToCart={handleAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
}

export default App;
