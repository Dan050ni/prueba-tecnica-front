import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p><strong>Materia:</strong> {task.subject}</p>
      <p><strong>Fecha límite:</strong> {task.dueDate}</p>
      <p><strong>Estado:</strong> {task.status}</p>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Editar</button>
        <button onClick={() => onComplete(task.id)}>Completar</button>
        <button onClick={() => onDelete(task.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default TaskCard;
