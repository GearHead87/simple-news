import { useMutation, useQueryClient } from '@tanstack/react-query';
import { db, makeAPIRequest } from '../lib/restAPI';

const useDeleteArticleById = () => {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationFn: async (id: string) => {
			// const res = await makeAPIRequest<void>('DELETE', `/news/${id}.json`);
			const res = await db.remove(`/news/${id}.json`);
			return res;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['articles'],
			});
		},
	});
	const deleteArticleById = (id: string) => {
		mutateAsync(id);
	};

	return {
		deleteArticleById,
		isLoading: isPending,
	};
};

export default useDeleteArticleById;
