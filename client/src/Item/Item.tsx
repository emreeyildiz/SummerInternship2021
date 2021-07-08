import Button from '@material-ui/core/Button';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
//Types
import {Wrapper} from "./Item.style";
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import {Typography} from "@material-ui/core";

// const StyledButton = withStyles({
//     root: {
//       borderRadius: 3,
//       border: 0,
//       color: '#0f3c54',
//       height: 7,
//       padding: '20px 0px',
//       fontSize: 14,
//
//     },
//     label: {
//       textTransform: 'capitalize',
//     },
//   })(Button);



const Item: any = (data) => {

    return(
    <Wrapper>
        <MuiThemeProvider theme={data.theme}>
        <h2> Core </h2>

        <ul>
            {Object.keys(data.item.core).map(function (sub, index) {
                let disable = false;

                if (data.createdFrom[sub] === data.item.id)
                    disable = true;

                return <li key={index}><Button color = {disable===true ? "primary" : "secondary"}
                                                         onClick={() => data.handleAddToCart(data.item, data.item.core, "core", sub)}><Typography variant = "body1">  {sub}: {data.item.core[sub]}</Typography></Button>
                    </li>
                }
            )}

        </ul>
        <h2> Status </h2>

        <ul>
            {Object.keys(data.item.status).map(function (sub, index) {
                let disable = false;
                if (data.createdFrom[sub] === data.item.id)
                    disable = true;

                return <li key={index}><Button color =  {disable===true ? "primary" : "secondary"}
                                                         onClick={() => data.handleAddToCart(data.item, data.item.status, "status", sub)}><Typography>{sub}: {data.item.status[sub]}</Typography></Button>
                    </li>
                }
            )}

        </ul>
        <h2> Type </h2>

        <ul>
            {Object.keys(data.item.type).map(function (sub, index) {
                    let disable = false;
                    if (data.createdFrom[sub] === data.item.id)
                        disable = true;
                    return <li key={index}><Button color =  {disable===true ? "primary" : "secondary"}
                                                         onClick={() => data.handleAddToCart(data.item, data.item.type, "type", sub)}><Typography>{sub}: {data.item.type[sub]}</Typography></Button>
                    </li>

                }
            )}

        </ul>
        <h2> SourceList </h2>

        <ul>
            {(data.item.sourceList).map(function (sub, index) {

                let disable = false;
                 if(data.createdFrom.sourceList && data.createdFrom.sourceList[sub] === data.item.id)
                     disable = true;
                    return (<li key={index}><Button color =  {disable===true ? "primary" : "secondary"}
                        onClick={() => data.handleAddToCart(data.item, data.item.sourceList, "sourceList", sub)}><Typography>{sub}</Typography></Button>
                    </li>);
                }
            )}


        </ul>
        </MuiThemeProvider>
    </Wrapper>
    );

}
export  default Item;