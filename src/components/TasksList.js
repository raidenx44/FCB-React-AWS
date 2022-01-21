import Tasks from "./Tasks"

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

export default TasksList;