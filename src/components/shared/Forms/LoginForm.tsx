import FormButton from '../../base/FormButton';
import FormInput from '../../base/FormInput';

const LoginForm = ({ label, handleSubmit, children }) => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form onSubmit={handleSubmit} className="card-body">
					<FormInput label="Email" name="email" placeholder="email" type="email" />
					<FormInput
						label="password"
						name="password"
						placeholder="password"
						type="password"
					/>

					<FormButton type="submit" label={label}></FormButton>
					{children}
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
