import { FormEvent } from 'react';
import AddNewsFrom from '../../components/shared/Forms/AddNewsForm';
import { useNavigate } from 'react-router-dom';
import useSaveArticle from '../../hooks/useSaveArticle';
import { imageUpload } from '../../lib/utils';
import { toast } from 'react-toastify';

const AddNewsPage = () => {
	const navigate = useNavigate();
	const { saveArticle } = useSaveArticle();

	const handleSubmit = async (e: React.SyntheticEvent<FormEvent>) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title?.value;
		const content = form.content?.value;
		const img = form.image.files[0];
		const image = await imageUpload(img);
		console.log(image);
		if (image) {
			await saveArticle(title, content, image);
			toast.success('News Added Successfully');
			navigate('/');
		}
	};
	return (
		<div>
			<AddNewsFrom handleSubmit={handleSubmit} />
		</div>
	);
};

export default AddNewsPage;
