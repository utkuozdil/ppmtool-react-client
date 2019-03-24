import React from "react";
import ProjectTask from "./projectTask/ProjectTask";

const Backlog = props => {
  const projectTasks = props.projectTasks.map(projectTask => (
    <ProjectTask key={projectTask.id} projectTask={projectTask} />
  ));

  let todoTasks = [];
  let inProgressTasks = [];
  let doneTasks = [];

  for (let i = 0; i < projectTasks.length; i++) {
    if (projectTasks[i].props.projectTask.status === "TO_DO")
      todoTasks.push(projectTasks[i]);
    else if (projectTasks[i].props.projectTask.status === "IN_PROGRESS")
      inProgressTasks.push(projectTasks[i]);
    else
      doneTasks.push(projectTasks[i]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-secondary text-white">
              <h3>TO DO</h3>
            </div>
          </div>
          {todoTasks}
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-primary text-white">
              <h3>In Progress</h3>
            </div>
          </div>
          {inProgressTasks}
        </div>
        <div className="col-md-4">
          <div className="card text-center mb-2">
            <div className="card-header bg-success text-white">
              <h3>Done</h3>
            </div>
          </div>
          {doneTasks}
        </div>
      </div>
    </div>
  );
};

export default Backlog;
