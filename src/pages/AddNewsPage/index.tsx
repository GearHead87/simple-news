import AddNewsFrom from '../../components/shared/Forms/AddNewsFrom';
import { saveArticle } from '../../lib/utils/newsStorage';

const AddNewsPage = () => {
	const handleSubmit = (e: React.FC<HTMLFormElement>) => {
		e.preventDefault();
		const id = Math.floor(Math.random() * 10000 + 1);
		const form = e.target;
		const title = form.title.value;
		const content = form.content.value;
        console.log(title, content);
		saveArticle({ id, title, content });
	};
	return (
		<div>
			<AddNewsFrom handleSubmit={handleSubmit} />
		</div>
	);
};

export default AddNewsPage;
