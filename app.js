/*my first non AI javascript app*/

function createNewTask () {
	const node = document.createElement("div");

	const nodeText = document.createTextNode("New task");

	node.appendChild(nodeText);

	document.getElementById("taskList").appendChild(node);
}

