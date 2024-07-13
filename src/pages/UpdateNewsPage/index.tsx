import { useParams } from 'react-router-dom';
import UpdateNewsForm from '../../components/shared/Forms/UpdateNewsForm';
import { getArticleById, updateArticleById } from '../../lib/restAPI';
import { FormEvent, useEffect, useState } from 'react';

const UpdateNewsPage = () => {
	const { id } = useParams();

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

	const handleSubmit = (e: React.SyntheticEvent<FormEvent>) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title?.value;
		const content = form.content?.value;
		console.log(title, content);
		updateArticleById(title, content, id);
	};

	return (
		<div>
			<UpdateNewsForm handleSubmit={handleSubmit} article={article} />
		</div>
	);
};

export default UpdateNewsPage;
