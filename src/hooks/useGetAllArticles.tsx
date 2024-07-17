import { useQuery } from '@tanstack/react-query';
import { makeAPIRequest } from '../lib/restAPI';

export async function fetchAllArticles() {
	const res = await makeAPIRequest<void>('GET', '/news.json');
	const tempData = Object.keys(res).map((currentId) => {
		return {
			...res[currentId],
			id: currentId,
		};
	});
	return tempData;
}

export const useGetAllArticles = () => {
	const { data: articles, isLoading } = useQuery({
		queryKey: ['articles'],
		queryFn: fetchAllArticles,
	});
	return { articles, isLoading };
};
