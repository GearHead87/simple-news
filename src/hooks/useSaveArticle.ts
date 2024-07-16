import { makeAPIRequest } from '../lib/restAPI';

export async function saveArticle(title: string, content: string) {
	const res = await makeAPIRequest<void>('POST', '/news.json', { title, content });
	return res;
}
