import React, { useState } from "react";
// import React from "react";
import { Grid } from "@material-ui/core";
import FilterInput from "../../components/FilterInput";
import List from "../../components/List";
import { data } from "../../api/dashboard"; // available devices

// may need to track the available list as well as filtered list
// so there will be 5 different states we are dealing with
// may also need state for the filter input value (fliterValue, setFilterValue initial value empty string)
// can add useEffect to run filterAvailableDevice to run anytime availItems, myitems or filtervalue change run update
export const DashboardPage = () => {
  // console.log('this is dashboard -------------------------------------------------');
  // console.log(data);

  const [availableDevices, setAvailableDevices] =
    useState(data) || useState([]);
  const [myDevices, setMyDevices] = useState([]);
  const buttonText = "Add to My List";

  function handleAvailableListChange(index) {
    // create a copy of our arrays
    const availableDeviceList = [...availableDevices];
    const myDeviceList = [...myDevices];

    // remove the clicked item from the array
    const removedItem = availableDeviceList.splice(index, 1);
    // add the clicked item to the other array
    const myDeviceListArrayNEW = myDeviceList.concat(removedItem);

    console.log("-------------removedItems-------------------" + index);
    console.log(removedItem);
    // console.log('-------------availableDeviceList-------------------' + index)
    // console.log(availableDeviceList);

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

    // myDeviceList.splice(index, 1);
    console.log("-------------removedItem-------------------" + index);
    console.log(removedItem);
    console.log("-------------myDeviceList-------------------" + index);
    console.log(myDeviceList);

    // set our new state
    setMyDevices(myDeviceList);
    setAvailableDevices(availableDeviceListNEW);
  }

  return data === null ? null : (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Device Dashboard</h1>
      </Grid>

      <Grid item xs={12} sm={6}>
        <h2>Available Devices</h2>
        <FilterInput />
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
