import { makeAPIRequest } from '../lib/restAPI';

export async function deleteArticleById(id: string) {
	const res = await makeAPIRequest<void>('DELETE', `/news/${id}.json`);
	return res;
}
