import Swal from 'sweetalert2';

/**
 * Formatea una fecha ISO a formato DD/MM/YYYY
 * @param {string} isoDate - Fecha en formato ISO (YYYY-MM-DD)
 * @returns {string} - Fecha formateada DD/MM/YYYY
 */
export const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Filtra tareas según materia o estado
 * @param {Array} tasks - Array de tareas
 * @param {Object} filters - { subject: string, status: string }
 * @returns {Array} - Tareas filtradas
 */
export const filterTasks = (tasks, filters) => {
  return tasks.filter((task) => {
    const subjectMatch = filters.subject
      ? task.subject.toLowerCase().includes(filters.subject.toLowerCase())
      : true;
    const statusMatch = filters.status ? task.status === filters.status : true;
    return subjectMatch && statusMatch;
  });
};

/**
 * Muestra confirmación para eliminar una tarea con SweetAlert2
 * @param {Function} onConfirm - Callback si el usuario confirma eliminación
 */
export const confirmDelete = async (onConfirm) => {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'No podrás revertir esta acción',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  });

  if (result.isConfirmed) {
    onConfirm();
    Swal.fire('Eliminado', 'La tarea ha sido eliminada.', 'success');
  }
};
