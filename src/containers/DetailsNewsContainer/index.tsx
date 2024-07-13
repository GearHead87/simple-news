// import { deleteArticleById, getArticleById } from '../../lib/utils/newsStorage';
import { useEffect, useState } from 'react';
import { getArticleById } from '../../lib/restAPI';
import DetailsNewsView from '../../views/DetailsNewsView';

const DetailsNewsContainer = ({ id }) => {
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

	const handleDelete = () => console.log(id);

	return (
		<div>
			<DetailsNewsView article={article} handleDelete={handleDelete} />
		</div>
	);
};

export default DetailsNewsContainer;
