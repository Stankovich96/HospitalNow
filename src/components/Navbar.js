import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Link } from "react-router-dom";

//Material UI imports
import { fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

//Google map and Places api
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const styles = (theme) => ({
	title: {
		position: "absolute",
		display: "inline-block",
		textDecoration: "none",
		color: "#ffffff",
	},
	logo: {
		maxWidth: 60,
	},
	menu: {
		position: "absolute",
		right: 400,
		padding: 40,
	},
	search: {
		position: "absolute",
		right: 200,
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		borderColor: "white",
		marginLeft: 0,
		height: "80%",
		width: "80%",
		margin: "0 10px 5px 10px",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	cssOutlinedInput: {
		borderColor: "white",
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		top: 5,
		left: 160,
		cursor: "pointer",
	},
	locate: {
		position: "absolute",
		right: 100,
		background: "none",
		border: "none",
		zIndex: 10,
	},
});

// function Search() {
// 	const {
// 		ready,
// 		value,
// 		suggestions: { status, data },
// 		setValue,
// 		clearSuggestions,
// 	} = usePlacesAutocomplete({
// 		requestOptions: {
// 			location: { lat: () => 9.060352, lng: () => 7.448166400000001 },
// 			radius: 100 * 1000,
// 		},
// 	});
// }

const Navbar = (props) => {
	const { classes } = props;

	const Locate = () => {
		if (!navigator.geolocation) {
			alert("Geolocation is not supported by browser");
		} else {
			const success = (position) => {
				const lat = position.coords.latitude;
				const long = position.coords.longitude;
				console.log(lat, long);
				alert("Geolocation successful");
			};
			const error = () => {
				alert("Geolocation Failed, try enable your location");
			};
			const Location = navigator.geolocation.getCurrentPosition(success, error);
		}
	};

	// const handleInput = (e) => {
	// 	setValue(e.target.value);
	// };

	// const handleSelect = async (address) => {
	// 	setValue(address, false);
	// 	clearSuggestions();

	// 	try {
	// 		const results = await getGeocode({ address });
	// 		const { lat, lng } = await getLatLng(results[0]);
	// 		panTo({ lat, lng });
	// 	} catch (error) {
	// 		console.log("😱 Error: ", error);
	// 	}
	// };

	const [searchState, setsearchState] = useState({
		search: "",
	});

	const handleChange = (event) => {
		setsearchState({
			[event.target.name]: event.target.value,
		});
		console.log(event.target.value);
	};

	const clearFields = () => {
		setsearchState({
			search: "",
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const SearchDetails = {
			search: searchState.search,
		};
		//  this.props.editUserDetails(SearchDetails);
		console.log(SearchDetails);
		clearFields();
	};

	return (
		<AppBar>
			<Toolbar>
				<Link to="/">
					<img src="Hospital.png" alt="Hospital" className={classes.logo} />
					<h3 className={classes.title}>HospitalNow</h3>
				</Link>
				{/* <Search />
				<Combobox onSelect={handleSelect}>
					<ComboboxInput
						value={value}
						onChange={handleInput}
						disabled={!ready}
						placeholder="Search your location"
					/>
					<ComboboxPopover>
						<ComboboxList>
							{status === "OK" &&
								data.map(({ id, description }) => (
									<ComboboxOption key={id} value={description} />
								))}
						</ComboboxList>
					</ComboboxPopover>
				</Combobox> */}

				<div className={classes.menu}>
					<Button color="inherit" component={Link} to="/">
						Home
					</Button>
					<Button color="inherit" component={Link} to="/About">
						About
					</Button>
					<Button color="inherit" component={Link} to="/services">
						Services
					</Button>
					<Button color="inherit" component={Link} to="/Search">
						Search
					</Button>
				</div>
				<form noValidate onSubmit={handleSubmit} className={classes.search}>
					<TextField
						id="outline-search"
						name="search"
						type="text"
						label="Search"
						color="primary"
						inputProps={{
							style: { color: "white" },
							classes: {
								root: classes.cssOutlinedInput,
							},
						}}
						value={searchState.search}
						onChange={handleChange}
						variant="outlined"
					/>

					<SearchIcon className={classes.searchIcon} onClick={handleSubmit} />
				</form>
				<Button className={classes.locate} onClick={Locate}>
					<img src="compass.png" alt="compass" />
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(Navbar);

{
	/* <Combobox onSelect={handleSelect}>
	<ComboboxInput
		value={value}
		onChange={handleInput}
		disabled={!ready}
		placeholder="Search your location"
	/>
	<ComboboxPopover>
		<ComboboxList>
			{status === "OK" &&
				data.map(({ id, description }) => (
					<ComboboxOption key={id} value={description} />
				))}
		</ComboboxList>
	</ComboboxPopover>
</Combobox>; */
}
