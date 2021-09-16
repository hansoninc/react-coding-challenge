import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import PanelList from "../../components/PanelList";
import FilterInput from "../../components/FilterInput";
import List from "../../components/List";
import dashboard from "../../api/dashboard";

export const DashboardPage = () => {
  /**
   * Set our initial useStates
   */
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [availableItems, setAvailableItems] = useState([]);
  const [myListItems, setMyListItems] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  /**
   * When data is done loading from the API use setState to assign
   * initial state data for each of our Items Lists.
   */
  useEffect(() => {
    const loadData = async () => {
      let deviceItems = await dashboard().getData().then(result => {
        return result;
      });
      setItems(deviceItems);
      setFilteredItems([...deviceItems]);
      setAvailableItems([...deviceItems]);
    }
    loadData();
  }, []);

  /**
   * When availableItems, myListItems or filterValue changes run
   * filterAvailableDevices and pass in filterValue
   */
  useEffect(() => {
    filterAvailableDevices(filterValue);
  }, [availableItems, myListItems, filterValue]);

  /**
   * Add Device to My List Items and Remove from Available List
   * @param id
   */
  const addDevice = (id) => {
    const temp = [...availableItems];
    setAvailableItems(temp.filter((item) => item.id !== id));
    const myDeviceItem = temp.filter((item) => item.id === id);
    setMyListItems([...myListItems, ...myDeviceItem]);
  }

  /**
   * Remove Device From My List and add the the Available List
   * @param id
   */
  const removeDevice = (id) => {
    const temp = [...myListItems];
    const myDeviceItem = temp.filter((item) => item.id === id);
    setAvailableItems([...availableItems, ...myDeviceItem]);
    setMyListItems(temp.filter((item) => item.id !== id));
  }

  /**
   * On Keyup of the filter input take the value and
   * setFilterValue with the value of the input
   * @param event
   */
  const filterChanged = (event) => {
    let value = event.target.value;
    //filterAvailableDevices(value);
    setFilterValue(value);
  }

  /**
   * If we have a filter value, were looping through all
   * the keys in each availableItem and checking if the value of the key
   * includes some words or text of the filter input value. If it does, we push it to
   * a temporary array (foundItems) and then use that to assign setFilteredItems.
   * If there is no filter value it just sets filteredItems to a clone of available items
   * @param value
   */
  const filterAvailableDevices = (value) => {
    let foundItems = [];

    if (!value) {
      setFilteredItems([...availableItems]);
    } else {
      availableItems.forEach((item) => {
        let itemFound = false;
        for (let key in item) {
          let itemValue = String(item[key]);
          if (itemValue && itemValue.toLowerCase().includes(value.toLowerCase())) {
            itemFound = true;
          }
        }

        if (itemFound) {
          foundItems.push(item);
        }
      });

      setFilteredItems(foundItems);
    }
  }

  /**
   * Passing in button information here
   * and button actions when clicked
   */
  const buttons = {
    "addDevice": {
      "text": "Add To List",
      "action": addDevice,
      "classes": "btn btn-primary"
    },
    "removeDevice": {
      "text": "Remove",
      "action": removeDevice,
      "classes": "btn btn-secondary"
    }
  };

  return items === null ? null : (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Device Dashboard</h1>
      </Grid>
      <Grid item xs={12} md={6}>
        <PanelList>
          <h2>Available Devices</h2>
          <FilterInput filterDevices={filterChanged}/>
          {filteredItems.length ?
            <List
              items={filteredItems}
              button={buttons.addDevice}
            /> : <div className="alert alert-primary">There are no available devices</div>}
        </PanelList>
      </Grid>
      <Grid item xs={12} md={6}>
        <PanelList>
          <h2>My Devices</h2>
          {myListItems.length ?
            <List
              items={myListItems}
              button={buttons.removeDevice}
            /> : <div className="alert alert-primary">You have no checked out devices</div>}
        </PanelList>
      </Grid>
    </Grid>
  );
};
