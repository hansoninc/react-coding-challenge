import React, {useEffect, useState} from "react";
import { Grid } from "@material-ui/core";
import PanelList from "../../components/PanelList";
import dashboard from "../../api/dashboard";

export const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);  

  useEffect(()=>{
    async function fetchData(){
      const deviceData = await dashboard().getDashboardData();
      setData(deviceData);
    }
    fetchData();
    setSelectedData([]);
  },[]);

  function addSelection(index){
    let list = [...data];
    let selectedList = [...selectedData];
    //const item = list.find(x=>x.uid === index);
    const item = list.splice(index, 1);

    selectedList.push(item[0]);
    setData(list);
    setSelectedData( selectedList );
  }

  function removeSelection(index){
    let list = [...data];
    let selectedList = [...selectedData];    
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
          <PanelList name="Available Devices" data={data} buttonAction={addSelection}/>
        </Grid>
        <Grid item xs={6}>
          <PanelList name="My Devices"  data={selectedData} buttonAction={removeSelection}/>
        </Grid>      
      </Grid>
    </div>
  );
};