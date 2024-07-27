import { Link } from 'react-router-dom';

type ArticleProp = {
	id: string;
	title: string;
	content: string;
	image: string;
};
type ArtclesProps = {
	articles: ArticleProp[];
};

const NewsView = ({ articles }: ArtclesProps) => {
	return (
		<div>
			{articles?.map((article) => (
				<div
					key={article.id}
					className="max-w-lg mx-auto space-y-10 border mt-10 p-10 rounded-lg"
				>
					<img src={article.image} className="max-w-sm mx-auto rounded-lg object-cover" />
					<h2 className="text-2xl">
						<Link to={`/news/${article.id}`}>{article.title}</Link>
					</h2>
					<h2>{article.content}</h2>
				</div>
			))}
		</div>
	);
};

export default NewsView;
