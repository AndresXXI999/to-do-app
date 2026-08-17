/*my first non AI javascript app*/

function createNewTask () {

	//create new id
	const currentId = getLastId();
	const newId = currentId === null ? 0 : parseInt(currentId) + 1;

	const node = document.createElement("div");
	const nodeText = document.createTextNode(`Task ${newId}`)
	node.setAttribute("id",newId);
	node.appendChild(nodeText);

	document.getElementById("taskList").appendChild(node);
	console.log(newId);
}

//separate function specifically created to get the last id, nothing else.
function getLastId(){
	const taskList = document.getElementById("taskList");
	if (taskList.lastElementChild === null) {
		return null;
	}else{
		return taskList.lastElementChild.id;
	}
}
