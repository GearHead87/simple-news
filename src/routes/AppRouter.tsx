import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/shared/Layout';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
		],
	},
]);
