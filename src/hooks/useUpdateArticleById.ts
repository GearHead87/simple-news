import { makeAPIRequest } from '../lib/restAPI';

export async function updateArticleById(title: string, content: string, id: string) {
	const res = await makeAPIRequest<void>('PUT', `/news/${id}.json`, { title, content });
	return res;
}
