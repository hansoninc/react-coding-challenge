import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// Components
import PanelList from '../../components/PanelList';
// Styles
import '../../assets/css/App.css';
// Data
import dashboard from '../../api/dashboard';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
	root: {
	display: 'block',
	backgroundColor: 'transparent',
	},
	toolbarIcon: {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '40px 25px 20px',
	marginBottom: '20px',
	...theme.mixins.toolbar,
	'&::before': {
		content: '""',
		opacity: '0.9',
		zIndex: '-1',
		position: 'absolute',
		left: '0',
		right: '0',
		top: '-20px',
		height: '125px',
		background: theme.palette.grey[200],
		transform: 'skewY(-8deg)',
		transformOrigin: 'top',
	},
	},
	iconColor: {
	htmlColor: '#fff',
	color: '#fff',
	},
	logo: {
	maxHeight: '40px',
	},
	menuButton: {
	marginRight: 36,
	},
	menuButtonHidden: {
	display: 'none',
	},
	title: {
	flexGrow: 1,
	},
	drawerPaper: {
	position: 'relative',
	whiteSpace: 'nowrap',
	width: drawerWidth,
	background: theme.palette.common.white,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	},
	drawerPaperClose: {
	overflowX: 'hidden',
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	width: theme.spacing(7),
	[theme.breakpoints.up('sm')]: {
		width: theme.spacing(9),
	},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
	flexGrow: 1,
	height: '100vh',
	overflow: 'auto',
	overflowX: 'hidden',
	},
	contentHome: {
	flexGrow: 1,
	// height: '100vh',
	overflow: 'auto',
	paddingTop: theme.spacing(4),
	paddingBottom: theme.spacing(4),
	'&::before': {
		content: '""',
		opacity: '0.9',
		zIndex: '-1',
		position: 'absolute',
		left: '0',
		right: '0',
		height: '375px',
		marginTop: '-85px',
		background: theme.palette.grey[900],
		transform: 'skewY(2.75deg)',
		transformOrigin: '100%',
	},
	},
	container: {
	backgroundColor: 'transparent',
	},
	paper: {
	padding: theme.spacing(2),
	display: 'flex',
	overflow: 'auto',
	flexDirection: 'column',
	},
	fixedHeight: {
	height: 240,
	},
}));

export const Page = (props: React.PropsWithChildren<{}>) => {
	const classes = useStyles(props);
  const [availableData, setAvailableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [myData, setMyData] = useState([]);

  // Annoymous function to get device data from API on page load (only runs once)
  useEffect(() => {
    async function fetchData() {
      // Get device data from function in api/dashabord.ts file
      const deviceData = await dashboard().getDashboardData();

      // Sort the array alphabetically by the model name
      deviceData.sort(function (x,y) {
        let a = x.model.toUpperCase();
        let b = y.model.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
      })

      // Re-render the page with new Available Data
      setAvailableData(deviceData);
      setFilteredData(deviceData);
    }

    fetchData();
  }, []);

  function handleCheckoutButtonClick(buttonId) {
    checkOutDevice(buttonId);
  }

  function handleReturnButtonClick(buttonId) {
    checkInDevice(buttonId);
  }

  function checkOutDevice(buttonId) {
    // Spread data onto new variables to manipulate
    const availableDataClone = [...availableData];
    const myDataClone = [...myData];

    // Loop through Available Data
    for (var i = 0; i < availableData.length; i++) {
      // If the ID matches the one clicked
      if (availableData[i].id == buttonId) {
        // Remove it from Available Data
        var item = availableDataClone.splice(i, 1);

        // Add it to My Data
        myDataClone.push(item[0]);

        // Sort the array alphabetically by the model name
        myDataClone.sort(function (x,y) {
          let a = x.model.toUpperCase();
          let b = y.model.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        });

        // Re-render the page with new data
        setAvailableData(availableDataClone);
        setFilteredData(availableDataClone);
        setMyData(myDataClone);
      }
    }
  }

  function checkInDevice(buttonId) {
    // Spread data onto new variables to manipulate
    const availableDataClone = [...availableData];
    const myDataClone = [...myData];

    // Loop through My Data
    for (var i = 0; i < myData.length; i++) {
      // If the ID matches the one clicked
      if (myData[i].id == buttonId) {
        // Remove it from My Data
        var item = myDataClone.splice(i, 1);

        // Add it to Available Data
        availableDataClone.push(item[0]);

        // Sort the array alphabetically by the model name
        availableDataClone.sort(function (x,y) {
          let a = x.model.toUpperCase();
          let b = y.model.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        });

        // Re-render the page with new data
        setAvailableData(availableDataClone);
        setFilteredData(availableDataClone);
        setMyData(myDataClone);
      }
    }
  }

  function handleInputSet(value) {
    // Convert the input text to lowercase
    value = value.toLowerCase();
    console.log("Input Value = " + value);

    // Get copy of the available devices array
    var availableDataClone = [...availableData];
    // Declare an array to hold the matching devices
    const results = [];

    // Loop through the available devices
    for (var i = 0; i < availableDataClone.length; i++) {
      let manufacturer = availableDataClone[i].manufacturer.toLowerCase();
      let model = availableDataClone[i].model.toLowerCase();
      let platform = availableDataClone[i].platform.toLowerCase();
      let id = availableDataClone[i];

      // NEEDS TO BE CHANGED TO THE .FILTER FUNCTION THAT MATT SUGGESTED
      if (manufacturer.includes(value)) { // Compare manufacturer to input value
        // Push ID to results array
        results.push(id);
      } else if (model.includes(value)) { // Compare model to input value
        // Push ID to results array
        results.push(id);
      } else if (platform.includes(value)) { // Compare platform to input value
        // Push ID to results array
        results.push(id);
      }
    }

    // Re-render the available devices with the filtered results
    setFilteredData(results);

    console.log("----- RESULTS -----");
    console.log(results);
    console.log("----- AVAILABLE -----");
    console.log(availableDataClone);
  }

  function handleResetFilter() {
    setFilteredData(availableData);
  }

	return (
    <div className={classes.root}>
      <CssBaseline />

      <main id="main-content">
        <div className="dashboard">
          <h1>Device Dashboard</h1>

          <PanelList
            title="Available Devices"
            buttonText="Check out"
            filtering={true}
            data={filteredData}
            onClicked={handleCheckoutButtonClick}
            inputSet={handleInputSet}
            filterReset={handleResetFilter}
          />
          
          <PanelList
            title="My Devices"
            buttonText="Return"
            filtering={false}
            data={myData}
            onClicked={handleReturnButtonClick}
          />
        </div>

        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
	);
};
