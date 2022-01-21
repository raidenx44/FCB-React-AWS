import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import TasksList from "./components/TasksList";

// My First Component
// function HelloWorld() {
//	return <h1>Hello, World!</h1> // JavaScript and XML (JSX) element --> h1
// }


function App() {
	const paraStyle = {
		"marginBottom" : "15px"

	};

	return (
		<div className="app">
			<header className="app-header">
				<h1>My Amazing ToDo-List App</h1>
				<p style={paraStyle}>The most simple and amazing todo-list React app.</p>
				<TasksList />
      		</header>
    	</div>		
    );
} 

// ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));

// ReactDOM.render(<HelloWorld />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

