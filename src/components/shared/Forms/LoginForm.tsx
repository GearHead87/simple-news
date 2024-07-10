const LoginForm = ({ handleSubmit }) => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form onSubmit={handleSubmit} className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							name="email"
							placeholder="email"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							placeholder="password"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control mt-6">
						<button type="submit" className="btn btn-primary">
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
