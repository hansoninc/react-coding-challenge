import React, { useEffect, useState } from "react";
// import React from "react";
import { Grid } from "@material-ui/core";
import FilterInput from "../../components/FilterInput";
import List from "../../components/List";
import dashboard, { Device } from "../../api/dashboard"; // available devices

export const DashboardPage = () => {
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]); // strongly typing with <Device>
  const [allAvailableDevices, setAllAvailableDevices] = useState<Device[]>([]);
  const [myDevices, setMyDevices] = useState<Device[]>([]);
  const [filterInput, setFilterInput] = useState("");
  const buttonText = "Add to My List";

  useEffect(() => {
    async function fetchData() {
      // never update state vars directly inside useEffect!!
      const data: Device[] = await dashboard.getDashboardData(); // strongly type with : then data type (TS specific)
      // setAllDevices(data);
      setFilteredDevices(data);
      setAllAvailableDevices(data);
    }
    fetchData();
  }, []); // [] only call once

  // call our filtering function anytime available device list changes
  useEffect(() => {
    handleFilterListInput(filterInput);
  }, [allAvailableDevices]);

  // leaving these examples for myself
  // useEffect(() => {
  //   console.log("filterInput ", filterInput);
  // }, [filterInput]);

  // useEffect(() => {
  //   console.log(
  //     "Filtered Devices ============================", filteredDevices);
  // }, [filteredDevices]);

  // useEffect(() => {
  //   console.log(
  //     "Available Devices ============================", allAvailableDevices );
  // }, [allAvailableDevices]);

  // useEffect(() => {
  //   console.log("My Devices ============================", myDevices);
  // }, [myDevices]);

  function handleAvailableListChange(index) {
    // create a copy of our arrays
    const allAvailableDeviceList = [...allAvailableDevices];
    const myDeviceList = [...myDevices];

    // remove the clicked item from the available devices array
    const removedItem = allAvailableDeviceList.splice(index, 1);
    // add the clicked item to the my devices array
    const myDeviceListArrayNEW = myDeviceList.concat(removedItem);

    // set our new state
    setAllAvailableDevices(allAvailableDeviceList);
    setMyDevices(myDeviceListArrayNEW);
  }

  function handleMyListChange(index) {
    // create a copy of our arrays
    const myDeviceList = [...myDevices];
    const allAvailableDeviceList = [...allAvailableDevices];

    // remove the clicked item from the array
    const removedItem = myDeviceList.splice(index, 1);
    // add the clicked item to the other array
    const allAvailableDeviceListNEW =
      allAvailableDeviceList.concat(removedItem);

    // set our new state
    setMyDevices(myDeviceList);
    setAllAvailableDevices(allAvailableDeviceListNEW);
  }

  function handleFilterListInput(value) {
    if (value) {
      console.log("there is a value!!!!!!!!!!!!!!!!!!!!!!!!!!!! " + value);
      setFilterInput(value);

      let filteringArray = [];
      let tempArray = [];

      // generate our new filtered list from allAvailableDevices
      // compare each item against our passed in filtering value
      allAvailableDevices.map((device) => {
        // create a new array with only the fields that we need for filtering
        let newDeviceObj = Object.entries(device);
        newDeviceObj.map((data, index, { length }) => {
          if (data[0] === "manufacturer") {
            tempArray["manufacturer"] = data[1];
          } else if (data[0] === "model") {
            tempArray["model"] = data[1];
          } else if (data[0] === "platform") {
            tempArray["platform"] = data[1];
          }

          // once we reach the end of our list, check to see if we have a matching value
          if (index + 1 === length) {
            // convert our array values to comma separated string
            const deviceValues = Object.values(tempArray)
              .toString()
              .toLowerCase();

            // see if our device has the filtering value present
            if (deviceValues.includes(value)) {
              filteringArray.push(device);
            }

            // reset our tempArray
            tempArray = [];
          }
        });
      });

      //update the state of our available device list with our newly filtered array
      setFilteredDevices(filteringArray);
    } else {
      setFilteredDevices(allAvailableDevices);
      setFilterInput("");
    }
  }

  return filteredDevices === null ? null : (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Device Dashboard</h1>
      </Grid>

      <Grid item xs={12} sm={6}>
        <h2>Available Devices</h2>
        <FilterInput onFilteringStateChange={handleFilterListInput} />
        <List
          data={filteredDevices}
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
