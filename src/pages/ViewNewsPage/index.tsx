import { useParams } from 'react-router-dom';
import DetailsNewsView from '../../views/DetailsNewsView';
import { getArticleById } from '../../lib/utils/newsStorage';

const ViewNewsPage = () => {
	const { id } = useParams();
	console.log(id);
    const article = getArticleById(id)
	return (
		<div>
			<DetailsNewsView article={article} />
		</div>
	);
};

export default ViewNewsPage;
