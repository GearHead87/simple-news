import { deleteArticleById, getArticleById } from '../../lib/utils/newsStorage';
import DetailsNewsView from '../../views/DetailsNewsView';

const DetailsNewsContainer = ({ id }) => {
	const article = getArticleById(id);
	const handleDelete = () => deleteArticleById(id);

	return (
		<div>
			<DetailsNewsView article={article} handleDelete={handleDelete} />
		</div>
	);
};

export default DetailsNewsContainer;
