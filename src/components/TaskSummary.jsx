import React from 'react';

const TaskSummary = ({ total, completed, pending }) => {
  return (
    <div className="task-summary">
      <h4>Resumen de Tareas</h4>
      <p>Total: {total}</p>
      <p>Completadas: {completed}</p>
      <p>Pendientes: {pending}</p>
    </div>
  );
};

export default TaskSummary;
