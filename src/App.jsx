import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import RoutesApp from './routes/Routes';



const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <RoutesApp />  {/* Aquí no hay Router */}
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
