import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/Navbar";

import ServicesList from "./components/Lists";
import { DataContext } from "./context/GlobalContext";
import "./App.css";

const App = () => {

	return (
		<div className="App">
			<DataContext>
				<MyNavbar> </MyNavbar>
				<h1> Sharing the Love of Coding </h1>

				<ServicesList> </ServicesList>
			</DataContext>
		</div>
	);
}

export default App;
