import React from 'react';

interface FormTextAreaProps {
	label: string;
	placeholder: string;
	defaultValue?: string;
	name: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ label, placeholder, defaultValue, name }) => {
	return (
		<label className="form-control">
			<div className="label">
				<span className="label-text">{label}</span>
			</div>
			<textarea
				className="textarea textarea-bordered h-24"
				name={name}
				placeholder={placeholder}
				defaultValue={defaultValue}
			></textarea>
		</label>
	);
};

export default FormTextArea;
