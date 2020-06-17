import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { Link } from "react-router-dom";

//Material UI imports
import { fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

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
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
});

const Navbar = (props) => {
	const { classes } = props;

	return (
		<AppBar>
			<Toolbar>
				<Link to="/">
					<img src="Hospital.png" alt="Hospital" className={classes.logo} />
					<h3 className={classes.title}>HospitalNow</h3>
				</Link>

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
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ "aria-label": "search" }}
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(Navbar);
