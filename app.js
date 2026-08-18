/*my first non AI javascript app*/

let taskArray = [];

function createNewTask () {

	//create new id
	const currentId = getLastId();
	const newId = currentId === null ? 0 : parseInt(currentId) + 1;
	
	const node = document.createElement("div");
	const nodeText = document.createTextNode(`Task ${newId}`)

	node.setAttribute("id",newId);
	let task = {id: newId,  title: "", description: ""};
	taskArray.push(task);

	node.appendChild(nodeText);

	document.getElementById("taskList").appendChild(node);
}

//separate function specifically created to get the last id, nothing else.
function getLastId(){
	const lastElement = taskArray.length;

	if(lastElement === 0) {
		console.log("empty array");
		return null;
	}else {
		console.log(`current id: ${taskArray[lastElement - 1].id}`)
		return taskArray[lastElement - 1].id;
	}
}

