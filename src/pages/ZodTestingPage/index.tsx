import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const ZodTestingPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(data);
	};

	return (
		<div>
			<form
				className="mx-auto flex flex-col max-w-sm gap-2"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					{...register('email')}
					type="text"
					placeholder="Email"
				/>
				{errors.email && <div>{errors.email.message}</div>}
				<input
					{...register('password')}
					type="password"
					placeholder="password"
				/>
				{errors.password && <div>{errors.password.message}</div>}
				<button disabled={isSubmitting} type="submit" className="btn">
					{isSubmitting ? 'Loading..' : 'Submit'}
				</button>
			</form>
		</div>
	);
};

export default ZodTestingPage;
