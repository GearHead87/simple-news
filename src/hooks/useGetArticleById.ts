import { makeAPIRequest } from '../lib/restAPI';

export async function getArticleById(id: string) {
	const res = await makeAPIRequest<void>('GET', `/news/${id}.json`);
	return { ...res, id };
}
