import React from 'react';
import LoginForm from '../../components/shared/Forms/LoginForm';
import { useAuth } from '../../contexts/AuthContext';

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
			<LoginForm handleSubmit={handleSubmit} />
		</div>
	);
};

export default SignUpPage;