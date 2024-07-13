interface FormInputProps {
	label: string;
	name: string;
	type: string;
	placeholder: string;
	defaultValue?: string;
}
const FormInput: React.FC<FormInputProps> = ({
	label,
	type,
	name,
	defaultValue,
	placeholder,
	...rest
}) => {
	return (
		<div className="form-control">
			<label className="label">
				<span className="label-text">{label}</span>
			</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className="input input-bordered"
				defaultValue={defaultValue}
				{...rest}
				required
			/>
		</div>
	);
};

export default FormInput;
