import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps {
	children: React.JSX.Element;
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { user } = useAuth();
	const location = useLocation();

	if (!user) {
		return <Navigate to="/login" state={{ from: location.pathname }} replace={true} />;
	}
	return children;
};

export default PrivateRoute;
