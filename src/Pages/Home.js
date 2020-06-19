import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

import Aboutus from "../components/Aboutus";

//Material Ui
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import Doctor from "../images/doctor.jpg";

const styles = (theme) => ({
	layout: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "1349px",
	},
	header: {
		display: "flex",
		flexDirection: "column",
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
	buttons: {
		textDecoration: "none",
		color: "#ffffff",
		textAlign: "center",
		width: 200,
		marginLeft: 80,
		"& a": {
			textDecoration: "none",
		},
	},
	tip: {
		textDecoration: "none",
	},
	doctor: {
		position: "absolute",
		top: 60,
		right: 100,
		height: 300,
		maxWidth: 400,
	},
});

const Home = (props) => {
	const { classes } = props;

	return (
		<Fragment>
			<div className={classes.layout}>
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
					<Tooltip
						title="Find a Hospital"
						className={classes.tip}
						placement="top"
					>
						<Link to="/Search">
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className={classes.buttons}
							>
								Find A Hospital
							</Button>
						</Link>
					</Tooltip>
				</div>
				<img src={Doctor} alt={Doctor} className={classes.doctor} />
				<hr />
				<Aboutus />
			</div>
		</Fragment>
	);
};

export default withStyles(styles)(Home);
