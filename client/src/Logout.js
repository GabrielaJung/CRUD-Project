import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
