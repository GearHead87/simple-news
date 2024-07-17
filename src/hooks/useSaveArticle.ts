import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeAPIRequest } from '../lib/restAPI';

type ArticleProp = {
	title: string;
	content: string;
};

const useSaveArticle = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['add-article'],
		mutationFn: async (newArticle: ArticleProp) => {
			const res = await makeAPIRequest<void>('POST', '/news.json', newArticle);
			return res;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['articles'],
			});
		},
	});

	const saveArticle = async (title: string, content: string) => {
		console.log('I am hitsss');
		try {
			await mutateAsync({ title, content });
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
