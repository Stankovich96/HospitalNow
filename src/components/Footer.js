import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
	logo: {
		maxWidth: 60,
	},
	footer: {
		backgroundColor: "#00bcd4",
		textAlign: "center",
		fontSize: 16,
		color: "#ffffff",
		padding: 20,
	},
});

const Footer = (props) => {
	const { classes } = props;

	return (
		<footer className={classes.footer}>
			<div>
				<Link to="/">
					<img src="Hospital.png" alt="Hospital" className={classes.logo} />
				</Link>
			</div>
			<div>Hospital Now 2020. All rights reserved</div>
		</footer>
	);
};

export default withStyles(styles)(Footer);
