import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
	const { user, signout } = useAuth();
	const handleSignout = () => {
		signout((res) => {
			console.log(res);
		});
	};
	const NavLinks = (
		<>
			<li>
				<Link to={'/'}>Home</Link>
			</li>
			<li>
				<Link to={'/add-news'}>Add News</Link>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
					>
						{NavLinks}
					</ul>
				</div>
				<Link to={'/'} className="btn btn-ghost text-xl">
					Simple <span className="text-blue-500">News</span>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{NavLinks}</ul>
			</div>
			<div className="navbar-end">
				{user ? (
					<button onClick={() => handleSignout()} className="btn">
						Logout
					</button>
				) : (
					<>
						<button className="btn">
							<Link to={'/login'}>Login</Link>
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
