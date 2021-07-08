import Item from'./Item/Item'
import Drawer from "@material-ui/core/Drawer";
import Grid from '@material-ui/core/Grid'
//Style
import {Wrapper, StyledButton, ButtonWrapper} from './App.style'
import FiberNewSharpIcon from '@material-ui/icons/FiberNewSharp'
import Cart from './Cart/Cart'
import "./App.css";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import {LinearProgress, MuiThemeProvider} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";




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

export type itemListContent = {
    id: string;
    itemId: string;
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

    "sourceList": sourceKey;

}
export type sourceKey ={
    SOURCE1: string;
    SOURCE2: string;
    SOURCE3: string;
}

export interface Serializable {
}

export type Source = "SOURCE1" | "SOURCE2" | "SOURCE3" | "";

export type CategoryEnum = "CATEGORY1" | "CATEGORY2" | "CATEGORY3" | "";

export type HostilityStatus = "FRIEND" | "NEUTRAL" | "FAKER" | "HOSTILE" | "UNKNOWN" | "";



const theme = createMuiTheme({
    palette: {
        primary: {
            light:'#ff0000',
            main: '#ff0000',
            dark: '#ff0000',
            contrastText: '#ff0000',
        },
        secondary: {

            //main: '#0f3c54',
            light:'#0f3c54',
            main: '#0f3c54',
            dark: '#0f3c54',
            contrastText: '#0f3c54',

        },
        // error: will use the default color
    },

    typography: {
        body1: {
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 14.5,
        }
    }
});



const App =() =>{

    const [cartOpen, setCartOpen] = useState(false);
    const [itemList, setItemList] = useState<CartItemType[]>([]);
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
            "sourceList": null,
            "itemId": ""
        }
    );

    const handleAddToCart = (item,clickedItem, typeString, key) => {
        console.log(JSON.stringify(item) + " \n\n" + JSON.stringify(clickedItem) + " \n\n key: " + key + " \n\n typeString: " + typeString)

        if(typeString === "sourceList"){
            let x = cartItem.sourceList;
            let check = x.find(element => element === key)
            if(!check){
                console.log("sa")
                x.push(key);
                setCartItem({...cartItem, sourceList : x});
                setCreatedFrom(prevItem =>({
                    ...prevItem,
                    sourceList: {...prevItem.sourceList, [key]: item.id}
                }));

            }
            else{

                if(createdFrom.sourceList[key] === item.id){
                    x.forEach((element, index) =>{
                        if(element === key)
                            x.splice(index,1);
                    });
                    setCartItem({...cartItem, sourceList : x});
                    setCreatedFrom(prevItem =>({
                        ...prevItem,
                        sourceList: {...prevItem.sourceList, [key]: undefined}
                    }));

                }
                else{
                    setCreatedFrom(prevItem =>({
                        ...prevItem,
                        sourceList: {...prevItem.sourceList, [key]: item.id}
                    }));
                }
            }

        }
        else{
            console.log(cartItem[typeString])
            console.log(clickedItem[key])
            if(createdFrom[key] === item.id){
                setCartItem(prevItem =>({
                    ...prevItem,
                    [typeString]: {...prevItem[typeString], [key]: ""}
                }));
                setCreatedFrom(prevItem =>({
                    ...prevItem,[key]: ""
                }));
            }
            else{
                setCartItem(prevItem =>({
                    ...prevItem,
                    [typeString]: {...prevItem[typeString], [key]: clickedItem[key]}
                }));
                console.log(key, item.id)
                // console.log("-------1------",key,createdFrom)

                setCreatedFrom(prevItem =>({
                    ...prevItem,[key]: item.id
                }));

                //setCreatedFrom({...createdFrom, [key]: item.id})
                // console.log("------2-------",createdFrom)
            }
        }
        //setCreatedFrom({...createdFrom, comment : "asdkasdk"})
        console.log(createdFrom);

    };

    useEffect(() => {
        axios.get<CartItemType[]>('http://localhost:8080/api/item')
            .then((response) => {
                 setItemList(response.data);
                console.log(response.data);
            });
    }, []);

    if(itemList.length === 0){
        return <LinearProgress/>
    }

    return (
        <MuiThemeProvider theme={theme}>
        <Wrapper>
        <Drawer anchor = 'right' open= {cartOpen} onClose={() => setCartOpen(false)}>
            <Cart
                cartItem = {cartItem}
                addToCart = {handleAddToCart}
                createdFrom = {createdFrom}
            />
        </Drawer>
        <ButtonWrapper>
            <StyledButton size = "medium" onClick={() => setCartOpen(true)}>
                <FiberNewSharpIcon/>
            </StyledButton>
        </ButtonWrapper>

        <Grid container spacing={2}>
            {itemList && itemList.map((item, index)  => (
                <Grid item key = {index} xs ={12} sm = {3}>
                    <Item item={item }  handleAddToCart={handleAddToCart} createdFrom = {createdFrom} theme = {theme}/>
                </Grid>
            ))}
        </Grid>
    </Wrapper>
        </MuiThemeProvider>
    );
}

export default App;
