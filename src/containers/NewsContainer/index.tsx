import { useGetAllArticles } from '../../hooks/useGetAllArticles';
import NewsView from '../../views/NewsView';

const NewsContainer = () => {
	const { articles } = useGetAllArticles();


	return (
		<div>
			<NewsView articles={articles} />
		</div>
	);
};

export default NewsContainer;
