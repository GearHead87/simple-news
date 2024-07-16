import { FormEvent } from 'react';
import AddNewsFrom from '../../components/shared/Forms/AddNewsForm';
import { useNavigate } from 'react-router-dom';
import { saveArticle } from '../../hooks/useSaveArticle';

const AddNewsPage = () => {
	const navigate = useNavigate();
	const handleSubmit = (e: React.SyntheticEvent<FormEvent>) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title?.value;
		const content = form.content?.value;
		saveArticle(title, content);
		navigate('/');
	};
	return (
		<div>
			<AddNewsFrom handleSubmit={handleSubmit} />
		</div>
	);
};

export default AddNewsPage;
