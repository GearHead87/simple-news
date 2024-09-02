import { Outlet } from 'react-router-dom';
import Header from '../Header';

const Layout = () => {
	return (
		<div>
			<Header />
			<div className='container max-h-[100vh-200px]'>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
