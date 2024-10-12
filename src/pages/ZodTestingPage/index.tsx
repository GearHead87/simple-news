import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
	email: string;
	password: string;
};

const ZodTestingPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>();

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000))
		console.log(data);
	};

	return (
		<div>
			<form
				className="mx-auto flex flex-col max-w-sm gap-2"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					{...(register('email', { required: "this is needed" }))}
					type="text"
					placeholder="Email"
				/>
				{errors.email && <div>{errors.email.message}</div>}
				<input
					{...register('password', {
						required: true,
						minLength: {
							value: 8,
							message: 'password must be 8 or more',
						},
					})}
					type="password"
					placeholder="password"
				/>
				{errors.password && <div>{errors.password.message}</div>}
				<button disabled={isSubmitting} type="submit" className="btn">
					{
						isSubmitting ? 'Loading..' : "Submit"
					}
				</button>
			</form>
		</div>
	);
};

export default ZodTestingPage;
