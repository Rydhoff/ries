import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./AuthService";

function PrivateRoute({ children }) {
    const auth = isAuthenticated()
    console.log(auth)
    return auth ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute