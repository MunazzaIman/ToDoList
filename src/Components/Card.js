import React, { useState } from "react";
import { CarouselIndicators } from "reactstrap";
import "./Card.css";
import EditTask from "./EditTask";

const Card = ({ obj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const updateTask = (myobj) => {
    console.log("In update Task fubtion before list");
    updateListArray(myobj, index);
  };
  const handleDelete = () => {
    deleteTask(index);
  };
  return (
    <div className="card-wrapper mr-5">
      <div className="card-top"></div>
      <div className="task-holder">
        <span
          className="card-header-css"
          
        >
          {obj.Name}
        </span>
        <p>{obj.Description}</p>
        <p>{obj.Date}</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit icons"
            onClick={() => {
              setModal(true);
            }}
          ></i>
          {"    "}
          <i className="far fa-trash-alt icons" onClick={handleDelete}></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        obj={obj}
      />
    </div>
  );
};

export default Card;
