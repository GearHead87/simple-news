// import { getAllArticles } from "../../lib/utils/newsStorage";
import { useEffect, useState } from 'react';
import { getAllArticles } from '../../lib/restAPI';
import NewsView from '../../views/NewsView';

const NewsContainer = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			try {
				const res = await getAllArticles();
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
