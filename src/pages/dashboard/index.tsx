import React, { useState } from "react";
// import React from "react";
import { Grid } from "@material-ui/core";
import FilterInput from "../../components/FilterInput";
import List from "../../components/List";
import { data } from "../../api/dashboard"; // available devices

export const DashboardPage = () => {
  const [availableDevices, setAvailableDevices] =
    useState(data) || useState([]);
  const [myDevices, setMyDevices] = useState([]);
  const buttonText = "Add to My List";
  const allDevices = data;

  function handleAvailableListChange(index) {
    // create a copy of our arrays
    const availableDeviceList = [...availableDevices];
    const myDeviceList = [...myDevices];

    // remove the clicked item from the array
    const removedItem = availableDeviceList.splice(index, 1);
    // add the clicked item to the other array
    const myDeviceListArrayNEW = myDeviceList.concat(removedItem);

    // set our new state
    setAvailableDevices(availableDeviceList);
    setMyDevices(myDeviceListArrayNEW);
  }

  function handleMyListChange(index) {
    // create a copy of our arrays
    const myDeviceList = [...myDevices];
    const availableDeviceList = [...availableDevices];

    // remove the clicked item from the array
    const removedItem = myDeviceList.splice(index, 1);
    // add the clicked item to the other array
    const availableDeviceListNEW = availableDeviceList.concat(removedItem);

    // set our new state
    setMyDevices(myDeviceList);
    setAvailableDevices(availableDeviceListNEW);
  }

  function handleFilterListInput(value) {
    let filteringArray = [];

    // generate our new filtered list from allDevices
    // compare each item against our passed in filtering value
    allDevices.map((device) => {
      // grab all of the array values and convert to comma separated sting
      const deviceValues = Object.values(device).toString().toLowerCase();

      // see if our device has the filtering value present
      if (deviceValues.includes(value)) {
        filteringArray.push(device);
      }
    });

    //update the state of our available device list with our newly filtered array
    setAvailableDevices(filteringArray);
  }

  return data === null ? null : (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Device Dashboard</h1>
      </Grid>

      <Grid item xs={12} sm={6}>
        <h2>Available Devices</h2>
        <FilterInput onFilteringStateChange={handleFilterListInput} />
        <List
          data={availableDevices}
          buttonText={buttonText}
          onStateChange={handleAvailableListChange}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <h2>My Devices</h2>
        <List
          data={myDevices}
          buttonText={"Remove"}
          onStateChange={handleMyListChange}
        />
      </Grid>
    </Grid>
  );
};
