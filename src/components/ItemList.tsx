import React, {ReactNode, useEffect, useState} from "react"
import {Card} from "./Card";
import {Device} from "../api/dashboard";
import {List} from "@material-ui/core";
import Fuse from 'fuse.js';

export type ListProps = {
  items: Device[],
  filter?: string,
  action?: ReactNode
}

export function ItemList({items, filter, action}: ListProps) {
  const [filteredItems, setFilteredItems] = useState([]);
  const filterOptions = {
    threshold: 0.2,
    keys: ['manufacturer', 'model', 'platform']
  };

  useEffect(() => {
    filterList();
  }, [items, filter]);

  function filterList() {
    const tmpList = [...items];

    if (filter === '' || !filter) {
      setFilteredItems(items);
    } else {
      const fuse = new Fuse(tmpList, filterOptions);
      const result = fuse.search(filter);
      setFilteredItems(result.map(el => el.item));
    }
  }

  return (
    <List>
      {
        filteredItems.map(item =>
          <Card key={item.uid}
            id={item.uid}
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
