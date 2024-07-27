import { Link } from 'react-router-dom';
import { useArticlesVoteStore } from '../../store/store';

const DetailsNewsView = ({
	article,
	handleDelete,
}: {
	article: {
		id: string;
		title: string;
		content: string;
		image: string;
	};
	handleDelete: (id: string) => void;
}) => {
	const vote = useArticlesVoteStore((state) => state.vote);
	const increaseVote = useArticlesVoteStore((state) => state.increaseVote);
	const decreaseVote = useArticlesVoteStore((state) => state.decreaseVote);
	return (
		<div>
			<div className="max-w-lg mx-auto space-y-10 border mt-10 p-10 rounded-lg">
				<img src={article?.image} className="max-w-sm mx-auto rounded-lg object-cover" />
				<h2 className="text-2xl">{article?.title}</h2>
				<h2>{article?.content}</h2>
				<div className="flex items-center justify-between">
					<div className="space-x-4">
						<Link to={`/update-news/${article?.id}`} className="btn btn-accent">
							Edit
						</Link>
						<button
							className="btn btn-accent"
							onClick={() => handleDelete(article?.id)}
						>
							delete
						</button>
					</div>
					<div className="flex gap-5">
						<button onClick={increaseVote} className="btn btn-sm btn-primary">
							Upvote
						</button>
						<p className="text-2xl">{vote}</p>
						<button onClick={decreaseVote} className="btn btn-sm btn-warning">
							Downvote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsNewsView;
