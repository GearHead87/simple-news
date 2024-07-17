import NewsView from '../../views/NewsView';
import { useGetAllArticles } from '../../hooks/useGetAllArticles';

const NewsContainer = () => {
	const { articles, isLoading } = useGetAllArticles();

	console.log(articles);

	return (
		<div>
			<NewsView articles={articles} />
		</div>
	);
};

export default NewsContainer;
