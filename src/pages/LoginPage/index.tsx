import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginForm from '../../components/shared/Forms/LoginForm';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
	const { signin } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from || '/';

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signin(email, password, (res) => {
			navigate(from);
			toast.success(`Welcome Back`);
			console.log(res);
		});
	};
	return (
		<div>
			<LoginForm label={'Login'} handleSubmit={handleSubmit}>
				<p>
					Dont have an Account?{' '}
					<Link to={'/signup'} className="text-blue-200">
						Sign Up
					</Link>
				</p>
			</LoginForm>
		</div>
	);
};

export default LoginPage;
