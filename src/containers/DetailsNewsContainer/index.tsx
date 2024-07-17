import { useNavigate } from 'react-router-dom';
import { deleteArticleById } from '../../hooks/useDeleteArticleById';
import useGetArticleById from '../../hooks/useGetArticleById';
import DetailsNewsView from '../../views/DetailsNewsView';

const DetailsNewsContainer = ({ id }) => {
	const navigate = useNavigate();
	const { data: article, isLoading } = useGetArticleById(id);

	const handleDelete = async () => {
		await deleteArticleById(id);
		navigate('/');
	};

	return (
		<div>
			<DetailsNewsView article={article} handleDelete={handleDelete} />
		</div>
	);
};

export default DetailsNewsContainer;
