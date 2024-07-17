import { useQuery } from '@tanstack/react-query';
import { makeAPIRequest } from '../lib/restAPI';

const useGetArticleById = (id: string) => {
	const { data, isLoading } = useQuery({
		queryKey: ['article', id],
		queryFn: async () => {
			const res = await makeAPIRequest<void>('GET', `/news/${id}.json`);
			return { ...res, id };
		},
	});
	return { data, isLoading };
};

export default useGetArticleById;
