import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"; //
import "./CreateTask.css";

const CreateTask = ({ modal, toggle, saveTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "task-name") {
      setTaskName(value);
    } else if (name === "task-description") {
      setDescription(value);
    } else {
      setTaskDate(value);
    }
  };
  const handleSave = () => {
    //console.log("handlesavebutton");
    let taskObject = {};
    taskObject["Name"] = taskName;
    taskObject["Description"] = description;
    // taskObject["Date"] = taskDate;
    saveTask(taskObject);
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="task-name">Subject</label>
            <input
              type="text"
              name="task-name"
              id="task-name"
              className="form-control"
              value={taskName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="task-description">Description</label>
            <textarea
              name="task-description"
              id="task-description"
              className="form-control"
              rows="5"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="task-date">Date</label>
            <input
              type="date"
              name="task-date"
              id="task-date"
              className="form-control"
              value={taskDate}
              onChange={handleChange}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <button onClick={handleSave} className="add-btn">
          Add
        </button>
        <button className="cancel-btn" onClick={toggle}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
