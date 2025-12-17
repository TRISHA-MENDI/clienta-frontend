import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("clienta_user");

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
