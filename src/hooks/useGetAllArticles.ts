import { makeAPIRequest } from '../lib/restAPI';

export async function getAllArticles() {
	const res = await makeAPIRequest<void>('GET', '/news.json');
	const tempData = Object.keys(res).map((currentId) => {
		return {
			...res[currentId],
			id: currentId,
		};
	});
    return tempData
}
