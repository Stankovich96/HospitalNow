import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

import Doctor from "../images/doctor.jpg";

const styles = (theme) => ({
	header: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	headerLeft: {
		justifyContent: "flex-start",
		padding: 30,
		textAlign: "left",
		marginLeft: 50,
	},
	headerText: {
		justifyContent: "flex-start",
		color: "#00bcd4",
	},
	paragraph: {
		justifyContent: "flex-start",
	},
	headerRight: {
		justifyContent: "flex-end",
		marginRight: 10,
	},
	doctor: {
		justifyContent: "flex-end",
		left: 0,
		height: 300,
		maxWidth: 400,
	},
});

const Home = (props) => {
	const { classes } = props;

	return (
		<div className={classes.header}>
			<div className={classes.headerLeft}>
				<h1 className={classes.headerText}>
					We Help You <br />
					Find the Closest MedicCare
				</h1>
				<p className={classes.paragraph}>
					Lorem ipsum dolor sit amet consectetur, adipisicing <br />
					elit recusandae debitis error expedita cum <br />
					temporibus praesentium iste doloremque. <br />
					Sint,culpa magni!
				</p>
			</div>
			<div className={classes.headerRight}>
				<img src={Doctor} alt={Doctor} className={classes.doctor} />
			</div>
		</div>
	);
};

export default withStyles(styles)(Home);
