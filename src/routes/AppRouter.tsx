import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/shared/Layout';
import HomePage from '../pages/HomePage';
import AddNewsPage from '../pages/AddNewsPage';
import ViewNewsPage from '../pages/ViewNewsPage';

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
				path: 'Add-news',
				element: <AddNewsPage />,
			},
			{
				path: 'news/:id',
				element: <ViewNewsPage />,
			},
		],
	},
]);
