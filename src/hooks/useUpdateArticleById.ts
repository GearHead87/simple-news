import { useMutation, useQueryClient } from '@tanstack/react-query';
import { db, makeAPIRequest } from '../lib/restAPI';

type ArticleProp = {
	// id: string;
	title: string;
	content: string;
	image: string;
};

const useUpdateArticleById = (id: string) => {
	const queryClient = useQueryClient();
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['update-article'],
		mutationFn: async (article: ArticleProp) => {
			// const res = await makeAPIRequest<ArticleProp>('PUT', `/news/${id}.json`, article);
			const res = await db.update(`/news/${id}.json`, article);
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
