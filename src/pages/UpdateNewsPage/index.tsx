import { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateNewsForm from '../../components/shared/Forms/UpdateNewsForm';
import useGetArticleById from '../../hooks/useGetArticleById';
import useUpdateArticleById from '../../hooks/useUpdateArticleById';

const UpdateNewsPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: article } = useGetArticleById(id);
	const { updateArticleById } = useUpdateArticleById(id);

	const handleSubmit = (e: React.SyntheticEvent<FormEvent>) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title?.value;
		const content = form.content?.value;
		updateArticleById({ title, content, id });
		navigate(`/news/${id}`);
	};

	return (
		<div>
			<UpdateNewsForm handleSubmit={handleSubmit} article={article} />
		</div>
	);
};

export default UpdateNewsPage;
