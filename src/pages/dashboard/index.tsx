import React, {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import PanelList from "../../components/PanelList";
import dashboard from "../../api/dashboard";

export const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [filterString, setFilterString] = useState("");

  useEffect(()=>{
    async function fetchData(){
      const deviceData = await dashboard().getDashboardData();
      setData(deviceData);
    }
    fetchData();
    setSelectedData([]);
    setFilterString("");
  },[]);

  function getIndex(value, arr, prop) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][prop] === value) {
            return i;
        }
    }
    return -1;
  }

  function addSelection(id){
    let list = [...data];
    let selectedList = [...selectedData];
    let index = getIndex(id, list, 'id');
    //const item = list.find(x=>x.uid === index);
    const item = list.splice(index, 1);

    selectedList.push(item[0]);
    setData(list);
    setSelectedData( selectedList );
  }

  function removeSelection(id){
    let list = [...data];
    let selectedList = [...selectedData];  
    let index = getIndex(id, list, 'id');  
    const item = selectedList.splice(index, 1);

    list.push(item[0]);
    setData(list);
    setSelectedData( selectedList );
  }

 

  return data === null ? null : (
    <div>
      <h1>Device Dashboard</h1>
      <Grid container spacing={2}>      
        <Grid item xs={6}>
          <PanelList 
            name="Available Devices" 
            data={data} 
            isFiltered={true}
            buttonAction={addSelection} 
            buttonText="+"
            filterString={filterString}
          />
        </Grid>
        <Grid item xs={6}>
          <PanelList 
            name="My Devices" 
            data={selectedData} 
            isFiltered={false}
            buttonAction={removeSelection} 
            buttonText="-"
          />
        </Grid>      
      </Grid>
    </div>
  );
};