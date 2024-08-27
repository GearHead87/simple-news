import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import useDeleteArticleById from '../../hooks/useDeleteArticleById';
import useGetArticleById from '../../hooks/useGetArticleById';
import DetailsNewsView from '../../views/DetailsNewsView';

const DetailsNewsContainer = ({ id }: { id: string }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.pathname;
	console.log(location.pathname);
	const { user } = useAuth();
	const { data: article } = useGetArticleById(id);
	const { deleteArticleById } = useDeleteArticleById();

	const handleDelete = () => {
		if (!user) {
			toast.error('Unauthorized Access');
			navigate('/login', {
				state: { from },
			});
		} else {
			deleteArticleById(id);
			toast.success('Article Deleted');
			navigate('/');
		}
	};

	return (
		<div>
			<DetailsNewsView article={article} handleDelete={handleDelete} />
		</div>
	);
};

export default DetailsNewsContainer;
