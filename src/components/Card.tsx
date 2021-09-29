import React from "react";
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

function Card(props){
    const item = props.item;
    return (
        <Grid container onClick={() => props.buttonAction(item.id)}>
            <Grid item xs={10}>
                <h4>{item.manufacturer} - {item.model}</h4>
                <ul>
                    <li>{item.platform}</li>
                    <li>{item.serial_number}</li>
                </ul>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="primary">{props.buttonText}</Button>
            </Grid>
        </Grid>
    )
}

export default Card;