import React, { useEffect, useState } from "react";

import "./ToDoList.css";
import "./CreateTask";
import CreateTask from "./CreateTask";
import Card from "./Card";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("TaskList");
    if (arr) {
      let myobj = JSON.parse(arr);
      setTaskList(myobj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("TaskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  const toggle = () => setModal(!modal);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("TaskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("TaskList", JSON.stringify(tempList));
    setTaskList = tempList;
    window.location.reload();
  };
  return (
    <>
      <div className="header">
        <h1 className="heading">Todo List</h1>
        <button
          className="btn-create"
          onClick={() => {
            setModal(true);
          }}
        >
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj, index) => (
          <Card
            obj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
      <CreateTask modal={modal} toggle={toggle} saveTask={saveTask} />
    </>
  );
};

export default ToDoList;
