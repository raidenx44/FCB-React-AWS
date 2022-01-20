import React from "react";

import ReactDOM from "react-dom";

// My First Component
function HelloWorld() {
	return <h1>Hello, World!</h1> // JavaScript and XML (JSX) element --> h1
}

ReactDOM.render(<HelloWorld></HelloWorld>, document.getElementById("root"));