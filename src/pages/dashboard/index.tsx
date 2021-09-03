import React, {Fragment, useEffect, useState} from "react";
import {Box, Button, Grid} from "@material-ui/core";
import {PanelList} from "../../components/PanelList";
import {FilterInput} from "../../components/FilterInput";
import dashboard from "../../api/dashboard";
import {ItemList} from "../../components/ItemList";

export const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [availableList, setAvailableList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    void fetchData();
  }, []);

  const fetchData = async () => {
    const data = await dashboard().getDashboardData();

    setData(data);
    setAvailableList(data);
    setMyList([]);
  }

  const onFilterChanged = (val) => {
    setFilterValue(val);
  };

  const addToMyList = (e) => {
    const itemIndex = getItemIndex(e, availableList);
    if (itemIndex < 0) { return; }

    let { donor, recipient } = transplant(availableList, itemIndex, myList);
    setAvailableList(donor);
    setMyList(recipient);
  }

  const removeFromMyList = (e) => {
    const itemIndex = getItemIndex(e, myList);
    if (itemIndex < 0) { return; }

    let { donor, recipient } = transplant(myList, itemIndex, availableList);
    setMyList(donor);
    setAvailableList(recipient);
  }

  const transplant = (l1, index, l2) => {
    let donor = [...l1];
    let recipient = [...l2];
    let movedItem = donor.splice(index, 1);
    recipient = recipient.concat(movedItem);

    return {
      donor: donor,
      recipient: recipient
    }
  }

  const getItemIndex = (e, targetList) => {
    const target = e.target;
    const listItem = target.closest('li');
    const itemId = listItem.getAttribute('data-item-id');
    return targetList.findIndex(el => el.uid === itemId);
  }

  return data && (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Device Dashboard</h1>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <PanelList title="Available Devices">
            <FilterInput placeholder="Filter Device List" onChange={value => onFilterChanged(value)}/>
            {availableList?.length === 0 ?
              <Box>
                <h3>There are no matching items</h3>
              </Box>
              : null }
            <ItemList
              items={availableList}
              filter={filterValue}
              action={
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={e => addToMyList(e)}
                >
                  Add to My List
                </Button>
              }
            />
          </PanelList>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PanelList title="My Devices">
            {myList?.length === 0 ?
              <Box>
                <h3>There are no items in your list</h3>
              </Box>
              : <Box mt={2} /> }
            <ItemList
              items={myList}
              action={
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={e => removeFromMyList(e)}
                >
                  Remove
                </Button>
              }
            />

          </PanelList>
        </Grid>
      </Grid>
    </Fragment>
  );
};
