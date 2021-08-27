import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import dashboard from '@api/dashboard';

export const DashboardPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let devices = dashboard().getDevices();
    if (devices) {
      let req = devices.then((devices) => {
        if (devices.ok) {
          return devices.json();
        } else {
          const errorMessage = `There's been an error attempting to get devices.`;
          throw new Error(errorMessage);
        }
      });
      req.then((d) => {
        setData(d);
      });
    }
  }, []);

  return data === null ? null : (
    <Grid container spacing={2}>
      <p>{JSON.stringify(data)}</p>
      <h1>Device Dashboard</h1>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};
