import { useNavigate } from 'react-router-dom';
import useDeleteArticleById from '../../hooks/useDeleteArticleById';
import useGetArticleById from '../../hooks/useGetArticleById';
import DetailsNewsView from '../../views/DetailsNewsView';

const DetailsNewsContainer = ({ id }: { id: string }) => {
	const navigate = useNavigate();
	const { data: article } = useGetArticleById(id);
	const { deleteArticleById } = useDeleteArticleById();

	const handleDelete = () => {
		deleteArticleById(id);
		navigate('/');
	};

	return (
		<div>
			<DetailsNewsView article={article} handleDelete={handleDelete} />
		</div>
	);
};

export default DetailsNewsContainer;
