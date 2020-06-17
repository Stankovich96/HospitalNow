import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./utils/theme";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Services from "./Pages/Services";

const theme = createMuiTheme(themeFile);

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<div className="App">
				<Router>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/About" component={About} />
							<Route exact path="/Search" component={Search} />
							<Route exact path="/Services" component={Services} />
						</Switch>
					</div>
					<Footer />
				</Router>
			</div>
		</MuiThemeProvider>
	);
}

export default App;
