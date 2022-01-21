import { useState } from "react";
import Tasks from "./Tasks"

function TasksList() {
	const [taskItemList, setTaskItemsList] = useState([
    "Follow Edukasyon.ph on Facebook.", // 0
    "Follow AWS Siklab Pilipinas on Facebook.", // 1
    "Follow Zuitt Coding Bootcamp on Facebook." // 2
  	]);

	const [taskValue, setTaskValue] = useState(""); // useState("Just another tasks"); 
	//console.log("taskValue: ", taskValue);

	const inputChangeHandler = (e) => {
		setTaskValue(e.target.value)
	};

	const addTaskHandler = (e) => {
		setTaskItemsList([e.target.value, ...taskItemList]);
		setTaskValue("");
	};

	return (
		<>
		<input 
		className="task-input" 
		placeholder="Create a new task" 
		onChange={inputChangeHandler}
		onBlur={addTaskHandler} 
		value={taskValue} /> 

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