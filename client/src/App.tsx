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
import React, {useState, Dispatch, useEffect, Component} from 'react';
import {makeStyles} from "@material-ui/core";
//import list from './data/MOCK_DATA-2.json'
import axios from "axios";




export interface CartItemType extends Serializable {
    id: string
    core: Core;
    status: Status;
    type: Type;
    sourceList: Source[];
}

export interface Core extends Serializable {
    categoryEnum: CategoryEnum;
    name: string;
    comment: string;
}

export interface Status {
    statusAttribute1: string;
    statusAttribute2: string;
    statusAttribute3: string;
    hostilityStatus: HostilityStatus;
}

export interface Type {
    typeAttribute1: string;
    typeAttribute2: string;
    typeAttribute3: string;
    typeAttribute4: string;
}

export interface Serializable {
}

export type Source = "SOURCE1" | "SOURCE2" | "SOURCE3" | "";

export type CategoryEnum = "CATEGORY1" | "CATEGORY2" | "CATEGORY3" | "";

export type HostilityStatus = "FRIEND" | "NEUTRAL" | "FAKER" | "HOSTILE" | "UNKNOWN" | "";


export type itemListContent = {
    id: string;

    "categoryEnum": string;
    name: string;
    "comment": string;

    "statusAttribute1": string;
    "statusAttribute2": string;
    "statusAttribute3": string;
    "hostilityStatus": string;


    "typeAttribute1": string;
    "typeAttribute2": string;
    "typeAttribute3": string;
    "typeAttribute4": string;

    "sourceList": sourceKey[];

}

export type sourceKey ={
    SOURCE1: string;
    SOURCE2: string;
    SOURCE3: string;
}

const App =() =>{

    const [cartOpen, setCartOpen] = useState(false);
    const [cartItem, setCartItem] = useState<CartItemType>({
        id: "",
        "core": {
            "categoryEnum": "",
            "name": "",
            "comment": ""
        },
        "status": {
            "statusAttribute1": "",
            "statusAttribute2": "",
            "statusAttribute3": "",
            "hostilityStatus": ""
        },
        "type": {
            "typeAttribute1": "",
            "typeAttribute2": "",
            "typeAttribute3": "",
            "typeAttribute4": ""
        },
        "sourceList": []

    });


    const [itemList, setItemList] = useState<CartItemType[]>([]);
    const [createdFrom, setCreatedFrom] = useState<itemListContent>(
        {
            id: "",
                "categoryEnum": "",
                "name": "",
                "comment": "",
                "statusAttribute1": "",
                "statusAttribute2": "",
                "statusAttribute3": "",
                "hostilityStatus": "",
                "typeAttribute1": "",
                "typeAttribute2": "",
                "typeAttribute3": "",
                "typeAttribute4": "",
            "sourceList": []
        }
    );

    const handleAddToCart = (item,clickedItem, typeString, key) => {
        console.log(JSON.stringify(item) + " \n\n" + JSON.stringify(clickedItem) + " \n\n key: " + key + " \n\n typeString: " + typeString)





        // y = createdFrom.coreList;
        // check = y.find(element => element == clickedItem)
        // if(!check){
        //     y.push(clickedItem)
        //     setCreatedFrom({...createdFrom, coreList : y});
        // }
        //
        // y = createdFrom.statusList;
        // check = y.find(element => element == clickedItem)
        // if(!check){
        //     y.push(clickedItem)
        //     setCreatedFrom({...createdFrom, statusList : y});
        //
        // }
        //
        // y = createdFrom.typeList;
        // check = y.find(element => element == clickedItem)
        // if(!check){
        //     y.push(clickedItem)
        //     setCreatedFrom({...createdFrom, typeList : y});
        //
        // }
        //
        // y = createdFrom.sourceList;
        // check = y.find(element => element == clickedItem)
        // if(!check){
        //     y.push(clickedItem)
        // }

        if(typeString === "sourceList"){
            // setCartItem(prevItem =>({
            //     ...prevItem,
            //     sourceList: [...prevItem.sourceList, key]
            // }));
            let x = cartItem.sourceList;
            let check = x.find(element => element == key)
            if(!check){
                x.push(key);
                setCartItem({...cartItem, sourceList : x});

            }
            setCreatedFrom(prevItem =>({
                ...prevItem,
                sourceList: {...prevItem.sourceList, [key]: item.id}
            }));
        }
        else{
            setCartItem(prevItem =>({
                ...prevItem,
                [typeString]: {...prevItem[typeString], [key]: clickedItem[key]}
            }));
            setCreatedFrom({...createdFrom, [key]: item.id})
        }

        console.log(cartItem);
        console.log(clickedItem[key]);
    };

    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios.get<CartItemType[]>('http://localhost:8080/api/item')
            .then((response) => {
                 setItemList(response.data);
                console.log(response.data);
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
            {itemList && itemList.map(item => (
                <Grid item key = {1} xs ={12} sm = {3}>
                    <Item item={item }  handleAddToCart={handleAddToCart} />
                </Grid>
            ))}
        </Grid>
    </Wrapper>
    );
}

export default App;
