import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/shared/Layout';
import HomePage from '../pages/HomePage';
import AddNewsPage from '../pages/AddNewsPage';
import DetailsNewsPage from '../pages/DetailsNewsPage';
import UpdateNewsPage from '../pages/UpdateNewsPage';
import SignUpPage from '../pages/SignUpPage';

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
				element: <AddNewsPage />,
			},
			{
				path: 'news/:id',
				element: <DetailsNewsPage />,
			},
			{
				path: 'update-news/:id',
				element: <UpdateNewsPage />,
			},
		],
	},
]);
