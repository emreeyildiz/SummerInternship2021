import Button from '@material-ui/core/Button';
import {MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
//Types
import {Wrapper} from "./Item.style";
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import {Typography} from "@material-ui/core";

const ButtonHeader = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: '#32a6a8',
        height: 7,
        padding: '20px 0px',
        fontSize: 22,
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center",
        textDecoration: "underline",
        marginBottom: '10px'

    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);



const Item: any = (data) => {

    return(
    <Wrapper>
        <MuiThemeProvider theme={data.theme}>
        {Object.keys(data.item).map(function(subTitle, index){
            if(typeof data.item[subTitle] != "object")
                return
            //console.log(subTitle)
            if(subTitle != "sourceList"){
                return <ul>
                    <ButtonHeader
                        onClick={() =>{
                            Object.keys(data.item[subTitle]).map(function (sub, index) {
                                    data.handleAddToCart(data.item, data.item[subTitle], subTitle.toString(), sub)
                                    console.log(sub)
                                }
                            )

                        }

                        }
                    >{subTitle}</ButtonHeader>
                    {Object.keys(data.item[subTitle]).map(function (sub, index) {
                            let disable = false;

                            if (data.createdFrom[sub] === data.item.id)
                                disable = true;

                            return <li key={index}><Button color = {disable===true ? "primary" : "secondary"}
                                                           onClick={() => data.handleAddToCart(data.item, data.item[subTitle], subTitle.toString(), sub)}><Typography variant = "body1">  {sub}: {data.item[subTitle][sub]}</Typography></Button>
                            </li>
                        }
                    )}
                </ul>

            }

            else {
                return         <ul>

                    <ButtonHeader
                        onClick={() =>{
                            (data.item[subTitle]).map(function (sub, index) {
                                    data.handleAddToCart(data.item, data.item[subTitle], subTitle.toString(), sub)
                                    console.log(sub)
                                }
                            )

                        }

                        }
                    >{subTitle}</ButtonHeader>

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
            }
        })}

        {/*<ul>*/}
        {/*    {Object.keys(data.item.core).map(function (sub, index) {*/}
        {/*        let disable = false;*/}

        {/*        if (data.createdFrom[sub] === data.item.id)*/}
        {/*            disable = true;*/}

        {/*        return <li key={index}><Button color = {disable===true ? "primary" : "secondary"}*/}
        {/*                                                 onClick={() => data.handleAddToCart(data.item, data.item.core, "core", sub)}><Typography variant = "body1">  {sub}: {data.item.core[sub]}</Typography></Button>*/}
        {/*            </li>*/}
        {/*        }*/}
        {/*    )}*/}

        {/*</ul>*/}
        {/*<h2> Status </h2>*/}

        {/*<ul>*/}
        {/*    {Object.keys(data.item.status).map(function (sub, index) {*/}
        {/*        let disable = false;*/}
        {/*        if (data.createdFrom[sub] === data.item.id)*/}
        {/*            disable = true;*/}

        {/*        return <li key={index}><Button color =  {disable===true ? "primary" : "secondary"}*/}
        {/*                                                 onClick={() => data.handleAddToCart(data.item, data.item.status, "status", sub)}><Typography>{sub}: {data.item.status[sub]}</Typography></Button>*/}
        {/*            </li>*/}
        {/*        }*/}
        {/*    )}*/}

        {/*</ul>*/}
        {/*<h2> Type </h2>*/}

        {/*<ul>*/}
        {/*    {Object.keys(data.item.type).map(function (sub, index) {*/}
        {/*            let disable = false;*/}
        {/*            if (data.createdFrom[sub] === data.item.id)*/}
        {/*                disable = true;*/}
        {/*            return <li key={index}><Button color =  {disable===true ? "primary" : "secondary"}*/}
        {/*                                                 onClick={() => data.handleAddToCart(data.item, data.item.type, "type", sub)}><Typography>{sub}: {data.item.type[sub]}</Typography></Button>*/}
        {/*            </li>*/}

        {/*        }*/}
        {/*    )}*/}

        {/*</ul>*/}


        </MuiThemeProvider>
    </Wrapper>
    );

}
export  default Item;