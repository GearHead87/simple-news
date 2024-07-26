import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoginForm from '../../components/shared/Forms/LoginForm';
import { useAuth } from '../../contexts/AuthContext';

const SignUpPage = () => {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		signup(email, password, (res) => {
			navigate('/');
			toast.success(`Welcome to Simple News`);
			console.log(res);
		});
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
