import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeAPIRequest } from '../lib/restAPI';

type ArticleProp = {
	id: string;
	title: string;
	content: string;
};

export async function updateArticleById(title: string, content: string, id: string) {
	const res = await makeAPIRequest<void>('PUT', `/news/${id}.json`, { title, content });
	return res;
}

const useUpdateArticleById = (id: string) => {
	const queryClient = useQueryClient();
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['update-article'],
		mutationFn: async (article: ArticleProp) => {
			const res = await makeAPIRequest<void>('PUT', `/news/${article.id}.json`, article);
			return res;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['article', id],
			});
		},
	});
	const updateArticleById = (article: ArticleProp) => {
		mutateAsync(article);
	};
	return {
		updateArticleById,
		isLoading: isPending,
	};
};

export default useUpdateArticleById;
