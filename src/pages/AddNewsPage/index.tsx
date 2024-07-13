import { FormEvent } from 'react';
import AddNewsFrom from '../../components/shared/Forms/AddNewsForm';
import { saveArticle } from '../../lib/restAPI';
// import { saveArticle } from '../../lib/utils/newsStorage';

const AddNewsPage = () => {
	const handleSubmit = (e: React.SyntheticEvent<FormEvent>) => {
		e.preventDefault();
		const id = Math.floor(Math.random() * 10000 + 1);
		const form = e.target;
		const title = form.title?.value;
		const content = form.content?.value;
		console.log(title, content);
		saveArticle(title, content);
	};
	return (
		<div>
			<AddNewsFrom handleSubmit={handleSubmit} />
		</div>
	);
};

export default AddNewsPage;
