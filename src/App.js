import {useState} from "react"
import './App.css';

function App() {


  const [myTaks, setTask] = useState()

  function collectIt(event){
    //logic to collect the information
    setTask(event.target.value)
    
  }

  function sendData(){
    //logic to display the task data
    const divtag = document.getElementById("taskContainer")
    const task = document.createElement("h3");
    task.append(myTaks);
    
    divtag.append(task)
  }

  return (
    <div className="App">
     Enter Task: <input type="text" onChange={collectIt} />
     <button onClick={sendData}>Submit</button>
     {/* Here I have to display the task */}
     <div id="taskContainer"></div>
    </div>
  );
}

export default App;
