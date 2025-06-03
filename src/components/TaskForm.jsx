import React from 'react';
import Input from './Input';
import Button from './Button';

const TaskForm = ({ task, onChange, onSubmit, isEditing = false }) => {
  return (
    <form onSubmit={onSubmit} className="task-form">
      <Input
        label="Título"
        name="title"
        value={task.title}
        onChange={onChange}
        required
      />
      <Input
        label="Materia"
        name="subject"
        value={task.subject}
        onChange={onChange}
        required
      />
      <Input
        label="Fecha límite"
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={onChange}
        required
      />
      <select name="status" value={task.status} onChange={onChange} required>
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
      </select>
      <Button type="submit" className="submit-btn">
        {isEditing ? 'Actualizar tarea' : 'Agregar tarea'}
      </Button>
    </form>
  );
};

export default TaskForm;
