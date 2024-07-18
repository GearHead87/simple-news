import React from 'react';
import LoginForm from '../../components/shared/Forms/LoginForm';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	const { signin } = useAuth();
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signin(email, password, (res) => {
			console.log(res);
		});
		console.log(email, password);
	};
	return (
		<div>
			<LoginForm handleSubmit={handleSubmit}>
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
