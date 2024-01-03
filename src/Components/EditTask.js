import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"; //
import "./CreateTask.css";

const EditTask = ({ modal, toggle, updateTask, obj }) => {
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
  useEffect(() => {
    setTaskName(obj.Name);
    console.log(obj.Name);
    setDescription(obj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    window.location.reload();
    let tempObject = {};
    tempObject["Name"] = taskName;
    tempObject["Description"] = description;
    updateTask(tempObject);
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit/Update Task</ModalHeader>
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
        <button onClick={handleUpdate} className="add-btn">
          Update
        </button>
        <button className="cancel-btn" onClick={toggle}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
