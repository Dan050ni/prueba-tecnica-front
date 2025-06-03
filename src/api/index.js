const API_URL = 'http://localhost:3001';

/** Autenticación: login */
export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/users?email=${email}&password=${password}`);
  const users = await res.json();
  return users.length > 0 ? users[0] : null;
};

/** Obtener todas las tareas */
export const fetchTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  return await res.json();
};

/** Crear nueva tarea */
export const createTask = async (task) => {
  const res = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  return await res.json();
};

/** Actualizar tarea */
export const updateTask = async (id, updatedTask) => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask),
  });
  return await res.json();
};

/** Eliminar tarea */
export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  return res.ok;
};
