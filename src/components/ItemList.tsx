import React, {ReactNode} from "react"
import {Card} from "./Card";
import {Device} from "../api/dashboard";
import {List} from "@material-ui/core";

export type ListProps = {
  items: Device[],
  action?: ReactNode
}

export function ItemList({items, action}: ListProps) {
  return (
    <List>
      {
        items.map((item, index) =>
          <Card key={index}
            primary={`${item.manufacturer} ${item.model}`}
            secondary={item.platform}
            tertiary={`S/N: ${item.serial_number}`}
            action={action}
          />
        )
      }
    </List>
  )
}
