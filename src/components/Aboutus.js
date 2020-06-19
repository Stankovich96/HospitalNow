import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

//Material Ui
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
	section: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: "10 0 10 0",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
		padding: 30,
		textAlign: "center",
	},
	sectionText: {
		justifyContent: "center",
		color: "#00bcd4",
	},
	paragraph: {
		justifyContent: "center",
	},
	buttons: {
		justifyContent: "center",
		textDecoration: "none",
		color: "#ffffff",
		textAlign: "center",
		width: 200,
		"& a": {
			textDecoration: "none",
		},
	},
	tip: {
		textDecoration: "none",
	},
});

const Aboutus = (props) => {
	const { classes } = props;
	return (
		<div className={classes.section}>
			<div className={classes.center}>
				<h1 className={classes.sectionText}>About Us</h1>
				<p className={classes.paragraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing <br />
					elit recusandae debitis error expedita cum <br />
					temporibus praesentium iste doloremque. <br />
					Sint,culpa magni!
				</p>
			</div>
			<Tooltip
				title="Click to know more about us"
				className={classes.tip}
				placement="top"
			>
				<Link to="/About">
					<Button
						type="submit"
						variant="contained"
						color="primary"
						className={classes.buttons}
					>
						Find out More
					</Button>
				</Link>
			</Tooltip>
		</div>
	);
};

export default withStyles(styles)(Aboutus);
