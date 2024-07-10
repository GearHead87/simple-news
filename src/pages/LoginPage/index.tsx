import React from 'react';
import LoginForm from '../../components/shared/Forms/LoginForm';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
	const { signin } = useAuth();
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
        signin(email,()=>{
            console.log("sign in successfull");
            
        })
		console.log(email, password);
	};
	return (
		<div>
			<LoginForm handleSubmit={handleSubmit} />
		</div>
	);
};

export default LoginPage;
