import React, { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import Task from './Task';

const TaskList = () => {
  
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={task.id} task = {task} index = {index}/>
      ))}
    </div>
  );
};

export default TaskList;
