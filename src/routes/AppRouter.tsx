import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/shared/Layout';
import HomePage from '../pages/HomePage';
import AddNewsPage from '../pages/AddNewsPage';
import DetailsNewsPage from '../pages/DetailsNewsPage';
import UpdateNewsPage from '../pages/UpdateNewsPage';
import SignUpPage from '../pages/SignUpPage';
import PrivateRoute from './PrivateRoute';
import FirebaseTestPage from '../pages/FirebaseTestPage';
import PackageTestPage from '../pages/PackageTestPage';

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
			{
				path: 'signup',
				element: <SignUpPage />,
			},
			{
				path: 'Add-news',
				element: (
					<PrivateRoute>
						<AddNewsPage />
					</PrivateRoute>
				),
			},
			{
				path: 'news/:id',
				element: <DetailsNewsPage />,
			},
			{
				path: 'update-news/:id',
				element: (
					<PrivateRoute>
						<UpdateNewsPage />
					</PrivateRoute>
				),
			},
			{
				path: '/firebase',
				element: <FirebaseTestPage />,
			},
			{
				path: '/packagetest',
				element: <PackageTestPage />,
			},
		],
	},
]);
