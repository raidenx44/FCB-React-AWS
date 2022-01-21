import { useState } from "react";
import Tasks from "./Tasks"

function TasksList() {
	const taskItemList = [
		"Follow Edukasyon.ph on Facebook.",
		"Follow AWS Siklab on Facebook.",
		"Follow Zuitt Coding Bootcamp on Facebook.",
		"Follow Zuitt Coding Bootcamp on Instagram."
	];

	const [taskValue, setTaskValue] = useState("Just another tasks");
	console.log("taskValue: ", taskValue);

	const inputChangeHandler = (e) => {
		setTaskValue(e.target.value)
	};

	return (
		<>
		<input 
		className="task-input" 
		placeholder="Create a new task" 
		onChange={inputChangeHandler} /> 

		<ul>
			{taskItemList.map((task, index)  => { 
				// console.log(task);
				return <Tasks key={index} taskName={task} />;
			})}
		</ul>
		</>
		);
}

export default TasksList;