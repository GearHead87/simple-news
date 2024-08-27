import FormButton from '../../base/FormButton';
import FormInput from '../../base/FormInput';
import FormTextArea from '../../base/FormTextArea';

interface AddNewsFormProps {
	handleSubmit: () => void;
}

const AddNewsFrom = ({ handleSubmit }: AddNewsFormProps) => {
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
					className="w-full max-w-xs"
				/>
				<FormTextArea label="Content" placeholder="Content" name="content" />
				<FormInput
					label="Cover Picture"
					name="image"
					placeholder="image"
					type="file"
					className="file-input file-input-bordered w-full max-w-xs"
				/>

				<FormButton type="submit" label="Add News"></FormButton>
			</form>
		</div>
	);
};

export default AddNewsFrom;
