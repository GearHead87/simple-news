import { useEffect, useState } from 'react';
import DetailsNewsView from '../../views/DetailsNewsView';
import { useNavigate } from 'react-router-dom';
import { getArticleById } from '../../hooks/useGetArticleById';
import { deleteArticleById } from '../../hooks/useDeleteArticleById';

const DetailsNewsContainer = ({ id }) => {
	const navigate = useNavigate();
	const [article, setArticle] = useState({});

	useEffect(() => {
		const getArticle = async () => {
			try {
				const res = await getArticleById(id);
				setArticle(res);
			} catch (e) {
				console.log(e);
			}
		};
		getArticle();
	}, [id]);

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
