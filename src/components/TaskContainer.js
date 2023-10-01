
import React from "react";

const TaskContainer = ({ task, index, removeTask, completeTask, isCompleted }) => {
  const taskClassName = isCompleted ? "taskItem completed" : "taskItem";

  return (
    <li className={taskClassName}>
      <span>{task}</span>
      <button onClick={() => removeTask(index)} className="removeButton">
        Remove
      </button>
      <button onClick={() => completeTask(index)} className="completeButton">
        Complete
      </button>
    </li>
  );
};

export default TaskContainer;
