import React, {useState} from "react";
import { Grid } from "@material-ui/core";
// import dashboard from "../../api/dashboard";

export const DashboardPage = () => {
	const [data] = useState(null);

	return data === null ? null : (
	<Grid container spacing={2}>
		<h1>Device Dashboard</h1>
		<Grid item xs={12}>

		</Grid>
	</Grid>
	);
};
