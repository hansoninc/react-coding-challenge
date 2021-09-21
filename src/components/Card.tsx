import React from "react";
import Box from "@material-ui/core/Box";
import Button from "./Button";

export default function Card(props) {
  return (
    <Box border={1} onClick={() => props.clickHandler(props.item.uid)}>
      {props.item.id}
      <br />
      {props.item.uid}
      <br />
      {props.item.build_number}
      <br />
      {props.item.manufacturer}
      <br />
      {props.item.model}
      <br />
      {props.item.platform}
      <br />
      {props.item.serial_number}
      <br />
      {props.item.version}
      <br />
      <Button buttonText={props.buttonText} />
    </Box>
  );
}
