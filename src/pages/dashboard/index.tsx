import React, {useEffect, useState} from "react";
import {Box, Button, Grid} from "@material-ui/core";
import {PanelList} from "../../components/PanelList";
import {FilterInput} from "../../components/FilterInput";
import dashboard from "../../api/dashboard";
import {ItemList} from "../../components/ItemList";
import Fuse from 'fuse.js';

export const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [availableList, setAvailableList] = useState([]);
  const [myList, setMyList] = useState([]);

  const [filterValue, setFilterValue] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const filterOptions = {
    threshold: 0.2,
    keys: ['manufacturer', 'model', 'platform']
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await dashboard().getDashboardData();

    setData(data);
    setAvailableList(data);
    setFilteredList(data);
    setMyList([]);
  }

  const onFilterChanged = (val) => {
    setFilterValue(val);
  };

  // setFilterValue() is asynchronous, so trying to immediately make UI changes
  // after setting it doesn't work right. It's always a letter behind. Instead,
  // we use a useEffect() hook to watch for changes on the filterValue and
  // availableList variables and trigger an update to the filteredList that way
  useEffect(() => {
    updateFilteredList();
  }, [filterValue, availableList]);

  const addToMyList = (e) => {
    const itemIndex = getItemIndex(e, availableList);
    if (itemIndex < 0) { return; }

    let tmp1 = availableList;
    let movedItem = tmp1.splice(itemIndex, 1);
    setAvailableList(tmp1);
    updateFilteredList();

    setMyList(myList.concat(movedItem));
  }

  const removeFromMyList = (e) => {
    const itemIndex = getItemIndex(e, myList);
    if (itemIndex < 0) { return; }

    let tmp1 = myList;
    let movedItem = tmp1.splice(itemIndex, 1);
    setMyList(tmp1);

    setAvailableList(availableList.concat(movedItem));
    updateFilteredList();
  }

  const updateFilteredList = () => {
    if (filterValue === '' || !filterValue) {
      setFilteredList(availableList);
    } else {
      const fuse = new Fuse(availableList, filterOptions);
      const result = fuse.search(filterValue);
      setFilteredList(result.map(el => el.item));
    }
  }

  const getItemIndex = (e, targetList) => {
    const target = e.target;
    const listItem = target.closest('li');
    const itemId = listItem.getAttribute('data-item-id');
    return targetList.findIndex(el => el.uid === itemId);
  }

  return data && (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Device Dashboard</h1>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <PanelList title="Available Devices">
            <FilterInput placeholder="Filter Device List" onChange={value => onFilterChanged(value)}/>
            {filteredList?.length === 0 ?
              <Box>
                <h3>There are no matching items</h3>
              </Box>
              : null }
            <ItemList
              items={filteredList}
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
    </>
  );
};
