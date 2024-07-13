import FormButton from '../../base/FormButton';
import FormInput from '../../base/FormInput';
import FormTextArea from '../../base/FormTextArea';

const UpdateNewsForm = ({ handleSubmit, article }) => {
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
					defaultValue={article.title}
				/>
				<FormTextArea
					label="Content"
					placeholder="Content"
					name="content"
					defaultValue={article.content}
				/>

				<FormButton type="submit" label="Update News"></FormButton>
			</form>
		</div>
	);
};

export default UpdateNewsForm;
