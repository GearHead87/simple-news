import { useEffect, useState } from 'react';
import NewsView from '../../views/NewsView';
import { getAllArticles } from '../../hooks/useGetAllArticles';

const NewsContainer = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			try {
				const res = await getAllArticles();
				console.log(res);
				setArticles(res);
			} catch (e) {
				console.log(e);
			}
		};
		getArticles();
	}, []);

	console.log(articles);

	return (
		<div>
			<NewsView articles={articles} />
		</div>
	);
};

export default NewsContainer;
