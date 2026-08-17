/*my first non AI javascript app*/

function createNewTask () {

	//get current id
	const taskList = document.getElementById("taskList");	
	const id = taskList.lastElementChild.id;
	
	//create new task
	node = document.createElement("div");
	const nodeText = document.createTextNode("New task");

	//we need to parse first
	const newId = parseInt(id) + 1;
	node.setAttribute("id",newId);

	node.appendChild(nodeText);

	document.getElementById("taskList").appendChild(node);
	console.log(newId);
}
