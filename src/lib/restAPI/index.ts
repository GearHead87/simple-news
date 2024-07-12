import { get, push, ref } from 'firebase/database';
import { db } from '../config';

// type ArticleProps = {
// 	// id: number;
// 	title: string;
// 	content: string;
// };

export function saveArticle(title: string, content: string) {
	push(ref(db, 'news/'), {
		title: title,
		content: content,
	});
}

export async function getAllArticles() {
	const newsRef = ref(db, 'news/');
	const snapshot = await get(newsRef);

	if (snapshot.exists()) {
		const myData = snapshot.val();
		const tempData = Object.keys(myData).map((currentId) => {
			return {
				...myData[currentId],
				id: currentId,
			};
		});
		return tempData
	} else {
		return [];
	}
}

export function getArticleById(id) {}
