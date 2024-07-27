import React from 'react';
import FormButton from '../../base/FormButton';
import FormInput from '../../base/FormInput';
import FormTextArea from '../../base/FormTextArea';
interface UpdateNewsFormProps {
	handleSubmit: (e: React.SyntheticEvent) => void;
	article: {
		title: string;
		content: string;
		image: string;
	};
}

const UpdateNewsForm: React.FC<UpdateNewsFormProps> = ({ handleSubmit, article }) => {
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-[700px] justify-center items-center mx-auto p-4 border rounded shadow-lg"
			>
				<FormInput
					label="title"
					name="title"
					placeholder="title"
					type="text"
					defaultValue={article?.title}
				/>
				<FormTextArea
					label="Content"
					placeholder="Content"
					name="content"
					defaultValue={article?.content}
				/>
				<FormInput
					label="Cover Picture"
					name="image"
					placeholder="image"
					type="file"
					className="file-input file-input-bordered w-full max-w-xs"
				/>

				<FormButton type="submit" label="Update News"></FormButton>
			</form>
		</div>
	);
};

export default UpdateNewsForm;
