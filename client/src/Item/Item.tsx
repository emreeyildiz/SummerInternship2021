import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
//Types
import {Wrapper} from "./Item.style";
import axios from "axios";
import {CartItemType} from "../App";

const StyledButton = withStyles({
    root: {
      borderRadius: 3,
      border: 0,
      color: '#0f3c54',
      height: 7,
      padding: '20px 0px',
      fontSize: 14,

    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);




const Item: any = (data) => {
    const [disable, setDisable] = useState(false);

    const isDisabled = (x, y) => {
        if(x === y)
            return true;
        return false;
    }




    return(
    <Wrapper>

        <h2> Core </h2>

        <ul>
            {Object.keys(data.item.core).map(function (sub, index) {
                 // setDisable(false);
                //
                // if (data.createdFrom[sub] === data.item.id)
                //     setDisable(true);

                return <li key={index}><StyledButton disabled={disable}
                                                         onClick={() => {data.handleAddToCart(data.item, data.item.core, "core", sub); setDisable(true); }} >{sub}: {data.item.core[sub]}</StyledButton>
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

                return <li key={index}><StyledButton disabled={disable}
                                                         onClick={() => data.handleAddToCart(data.item, data.item.status, "status", sub)}>{sub}: {data.item.status[sub]}</StyledButton>
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
                    return <li key={index}><StyledButton disabled={disable}
                                                         onClick={() => data.handleAddToCart(data.item, data.item.type, "type", sub)}>{sub}: {data.item.type[sub]}</StyledButton>
                    </li>

                }
            )}

        </ul>
        <h2> SourceList </h2>

        <ul>
            {(data.item.sourceList).map((sub, index) =>
                <li key={index}><StyledButton
                    onClick={() => data.handleAddToCart(data.item, data.item.sourceList, "sourceList", sub)}>{sub}</StyledButton>
                </li>
            )}

        </ul>
    </Wrapper>
    );

}
export  default Item;