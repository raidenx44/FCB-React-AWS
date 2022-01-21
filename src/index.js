import React from "react";

import ReactDOM from "react-dom";
import "./index.css"

// My First Component
// function HelloWorld() {
//	return <h1>Hello, World!</h1> // JavaScript and XML (JSX) element --> h1
// }

function Tasks(props) {
	console.log(props);
	return (
			// <li className="tasks-item"> Follow Edukasyon.ph on Facebook.</li>
			<li className="tasks-item"> {props.taskName} </li>
		);
}

function TasksList() {
	const taskItemList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Zuitt Coding Bootcamp on Instagram."
	];
	return (
		<>
		<input className="task-input" />
		<ul>
			{taskItemList.map((task, index)  => { 
				// console.log(task);
				return <Tasks key={index} taskName={task} />;
			})}
		</ul>
		</>
		);
}

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