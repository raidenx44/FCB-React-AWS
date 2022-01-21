function Tasks(props) {
	console.log(props);
	return (
			// <li className="tasks-item"> Follow Edukasyon.ph on Facebook.</li>
			<li className="tasks-item"> {props.taskName} </li>
		);
}

export default Tasks;