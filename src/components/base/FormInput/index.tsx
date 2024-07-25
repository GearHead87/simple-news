import { cn } from '../../../lib/utils';

interface FormInputProps {
	label: string;
	name: string;
	type: string;
	placeholder: string;
	className?: string;
	defaultValue?: string;
}
const FormInput: React.FC<FormInputProps> = ({
	label,
	type,
	name,
	defaultValue,
	placeholder,
	className,
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
				className={cn('input input-bordered', className)}
				defaultValue={defaultValue}
				{...rest}
				required
			/>
		</div>
	);
};

export default FormInput;
