import { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateNewsForm from '../../components/shared/Forms/UpdateNewsForm';
import useGetArticleById from '../../hooks/useGetArticleById';
import useUpdateArticleById from '../../hooks/useUpdateArticleById';
import { imageUpload } from '../../lib/utils';

const UpdateNewsPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: article } = useGetArticleById(id);
	const { updateArticleById } = useUpdateArticleById(id);

	const handleSubmit = async (e: React.SyntheticEvent<FormEvent>) => {
		e.preventDefault();
		const form = e.target;
		const title = form.title?.value;
		const content = form.content?.value;
		const img = form.image.files[0];
		let image = '';
		if (img) {
			image = await imageUpload(img);
		} else {
			image = article.image;
		}

		updateArticleById({ title, content, image });
		navigate(`/news/${id}`);
	};

	return (
		<div>
			<UpdateNewsForm handleSubmit={handleSubmit} article={article} />
		</div>
	);
};

export default UpdateNewsPage;
