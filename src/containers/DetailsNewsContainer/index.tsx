// import { deleteArticleById, getArticleById } from '../../lib/utils/newsStorage';
import { useEffect, useState } from 'react';
import { deleteArticleById, getArticleById } from '../../lib/restAPI';
import DetailsNewsView from '../../views/DetailsNewsView';
import { useNavigate } from 'react-router-dom';

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
