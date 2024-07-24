import React from 'react';
import LoginForm from '../../components/shared/Forms/LoginForm';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
	const { signup } = useAuth();
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signup(email, password, (res) => {
			console.log(res);
		});
		console.log(email, password);
	};
	return (
		<div>
			<LoginForm label={'Sign Up'} handleSubmit={handleSubmit}>
				<p>
					Already have an Account?{' '}
					<Link to={'/login'} className="text-blue-200">
						Login
					</Link>
				</p>
			</LoginForm>
		</div>
	);
};

export default SignUpPage;
