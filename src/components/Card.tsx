import React from "react"
import {IListItem} from "./IListItem";
import {ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";

export function Card({primary, secondary, tertiary, action}: IListItem) {
  return (
    <ListItem>
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
