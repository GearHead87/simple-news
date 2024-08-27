import { useMutation, useQueryClient } from '@tanstack/react-query';
import { db, makeAPIRequest } from '../lib/restAPI';

type ArticleProp = {
	title: string;
	content: string;
	image: string;
};

const useSaveArticle = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['add-article'],
		mutationFn: async (newArticle: ArticleProp) => {
			// const res = await makeAPIRequest<ArticleProp>('POST', '/news.json', newArticle);
			const res = await db.create('/news.json', newArticle);
			return res;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['articles'],
			});
		},
	});

	const saveArticle = async (title: string, content: string, image: string) => {
		try {
			await mutateAsync({ title, content, image });
		} catch (e) {
			console.log(e);
		}
	};
	return {
		saveArticle,
		isLoading: isPending,
	};
};

export default useSaveArticle;
