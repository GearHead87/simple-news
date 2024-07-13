import React from 'react';

interface FormButtonProps {
	type?: 'submit' | 'button';
	label?: string;
	children?: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ label = '', type, children }) => {
	return (
		<div className="form-control mt-6">
			<button type={type} className="btn btn-primary">
				{label}
				{children}
			</button>
		</div>
	);
};

export default FormButton;
