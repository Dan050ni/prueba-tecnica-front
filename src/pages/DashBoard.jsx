import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    dueDate: '',
  });
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.description || !newTask.dueDate) return;

    if (editTaskId) {
      await fetch(`http://localhost:3001/tasks/${editTaskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      setTasks(prev =>
        prev.map(t => (t.id === editTaskId ? { ...t, ...newTask } : t))
      );
      setEditTaskId(null);
    } else {
      const res = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newTask, completed: false }),
      });
      const created = await res.json();
      setTasks(prev => [...prev, created]);
    }

    setNewTask({ title: '', description: '', assignedTo: '', dueDate: '' });
  };

  const handleEdit = (task) => {
    setNewTask({
      title: task.title,
      description: task.description,
      assignedTo: task.assignedTo,
      dueDate: task.dueDate,
    });
    setEditTaskId(task.id);
  };

  const toggleComplete = async (task) => {
    const updated = { ...task, completed: !task.completed };
    await fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: updated.completed }),
    });
    setTasks(prev =>
      prev.map(t => (t.id === task.id ? updated : t))
    );
  };

  const handleDelete = async (taskId) => {
    await fetch(`http://localhost:3001/tasks/${taskId}`, { method: 'DELETE' });
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Bienvenido, {user?.name}</h1>
        <button onClick={logout}>Cerrar sesión</button>
      </div>

      {user.role === 'admin' && (
        <form className="task-form" onSubmit={handleSubmit}>
          <h2>{editTaskId ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
          <input name="title" placeholder="Título" value={newTask.title} onChange={handleChange} required />
          <input name="description" placeholder="Descripción" value={newTask.description} onChange={handleChange} required />
          <input name="assignedTo" placeholder="Asignado a..." value={newTask.assignedTo} onChange={handleChange} />
          <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleChange} required />
          <button type="submit">{editTaskId ? 'Actualizar' : 'Agregar'}</button>
        </form>
      )}

      <div className="dashboard-tasks">
        {tasks.length === 0 ? (
          <p>No hay tareas disponibles.</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Responsable:</strong> {task.assignedTo}</p>
              <p><strong>Entrega:</strong> {new Date(task.dueDate).toLocaleDateString()}</p>

              <div className="task-buttons">
                {user.role === 'student' && (
                  <button onClick={() => toggleComplete(task)} className="complete-btn">
                    {task.completed ? 'Marcar como pendiente' : 'Marcar como completada'}
                  </button>
                )}

                {user.role === 'admin' && (
                  <>
                    <button onClick={() => handleEdit(task)} className="complete-btn">
                      Editar
                    </button>
                    <button onClick={() => toggleComplete(task)} className="toggle-btn">
                      {task.completed ? 'Pendiente' : 'Completar'}
                    </button>
                    <button onClick={() => handleDelete(task.id)} className="delete-btn">
                      Eliminar
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
