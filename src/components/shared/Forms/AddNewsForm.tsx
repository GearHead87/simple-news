import FormButton from "../../base/FormButton";
import FormInput from "../../base/FormInput";
import FormTextArea from "../../base/FormTextArea";

const AddNewsFrom = ({ handleSubmit }) => {
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-[700px] justify-center items-center mx-auto p-4 border rounded shadow-lg"
			>
				<FormInput label="title" name="title" placeholder="title" type="text"/>
				<FormTextArea label="Content" placeholder="Content" name="content"/>

				<FormButton type="submit" label="Add News" ></FormButton>
			</form>
		</div>
	);
};

export default AddNewsFrom;
