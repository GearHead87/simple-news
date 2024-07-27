import { useQuery } from '@tanstack/react-query';
import { makeAPIRequest } from '../lib/restAPI';

interface ArticleProps {
	title: string;
	content: string;
	image: string;
}

const useGetArticleById = (id: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['article', id],
		queryFn: async () => {
			const res = await makeAPIRequest<ArticleProps>('GET', `/news/${id}.json`);
			return { ...res, id };
		},
	});
	return { data, isLoading };
};

export default useGetArticleById;
