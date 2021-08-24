import React from "react"
import {IListItem} from "./IListItem";
import {ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";

export function Card({id, primary, secondary, tertiary, action}: IListItem) {
  return (
    <ListItem data-item-id={id}>
      <ListItemText
        primary={primary}
        secondary={
          tertiary ?
            <>
              {secondary}<br />
              {tertiary}
            </>
            : secondary
        }
      >
      </ListItemText>
      {action ??
        <ListItemSecondaryAction>
          {action}
        </ListItemSecondaryAction>
      }
    </ListItem>
  )
}
