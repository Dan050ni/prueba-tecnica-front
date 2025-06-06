<h2 align="left">🧠 Academic Task Manager<br><br>Una aplicación web modular y funcional para gestionar tareas académicas con enfoque en UX/UI moderno, funciones completas para administradores y estudiantes, y estructura clara para facilitar su mantenimiento.</h2>

###

<p align="left">📌 Características principales<br><br>👩‍🏫 Administrador<br><br>Crear, editar y eliminar tareas.<br><br>Asignar tareas a estudiantes.<br><br>Ver todas las tareas con estado (completadas o pendientes).<br><br>Fecha de entrega clara para cada tarea.<br><br>👨‍🎓 Estudiante<br><br>Ver tareas asignadas.<br><br>Marcar tareas como completadas o pendientes.<br><br>🧰 Funciones adicionales<br><br>Visual atractivo, profesional y responsive.<br><br>Dashboard con tarjetas estilizadas por estado.<br><br>CRUD completo de tareas.<br><br>Rutas protegidas según rol de usuario.</p>

###

<h2 align="left">🚀 Instalación</h2>

###

<p align="left">git clone https://github.com/Dan050ni/prueba-tecnica-front.git<br><br>cd prueba-tecnica-front.git<br>npm install<br><br># Terminal 1 - JSON Server<br>npm run server<br><br># Terminal 2 - Aplicación<br>npm run dev</p>
<p> json-server --watch db.json --port 3001</p>

###

<h2 align="left">📁 Estructura del proyecto</h2>

###

<p align="left">tarea-manager/<br>├── public/<br>│   └── index.html<br>├── src/<br>│   ├── components/<br>│   │   └── Dashboard.jsx<br>│   ├── context/<br>│   │   └── AuthContext.jsx<br>│   ├── pages/<br>│   │   ├── Login.jsx<br>│   │   └── Register.jsx<br>│   ├── styles/<br>│   │   ├── auth.css<br>│   │   └── dashboard.css<br>│   ├── App.jsx<br>│   └── main.jsx<br>├── db.json         # Base de datos local JSON Server<br>├── vite.config.js<br>└── README.md</p>

###

<h2 align="left">🔐 Roles de usuario</h2>

###

<p align="left">admin: controla el sistema (CRUD de tareas).<br><br>student: visualiza y completa tareas asignadas.<br><br>Todas las rutas están protegidas mediante contexto de autenticación.</p>

###

<h2 align="left">✨ Diseño UI/UX</h2>

###

<p align="left">Paleta moderna basada en tonos azules, verdes y rojos.<br><br>Tipografía clara y profesional (Segoe UI, Tahoma).<br><br>Botones con estilos suaves, transiciones y sombras.<br><br>Layout adaptable con grid y cards informativas.<br><br>Indicadores visuales: tareas completadas (tachadas y opacas) y pendientes (resaltadas).<br><br>Íconos y secciones organizadas para mayor claridad.</p>

###

<h2 align="left">🧪 Funcionalidades pendientes o sugeridas</h2>

###

<p align="left">Validación avanzada de formularios.<br><br>Filtros por fecha, estado y asignado.<br><br>Conexión a una base de datos real (MongoDB, PostgreSQL).<br><br>Autenticación segura con JWT.<br><br>Paginación y búsqueda de tareas.</p>

###

<h2 align="left">I code with</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=vite" height="40" alt="vite logo"  />
</div>

###
