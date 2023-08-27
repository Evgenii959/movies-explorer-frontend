import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ element: Component, isLoggedIn, ...props }) => {
  return (
    isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />
  );
};
