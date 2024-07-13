import { get, push, ref, remove, set } from 'firebase/database';
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
		return tempData;
	} else {
		return [];
	}
}

export async function getArticleById(id: string) {
	const dbRef = ref(db, 'news/' + id);
	const snapshot = await get(dbRef);
	if (snapshot.exists()) {
		const targetObject = snapshot.val();
		return { ...targetObject, id };
	}
}

export function updateArticleById(title: string, content: string, id: string) {
	const newDocRef = ref(db, '/news/' + id);
	set(newDocRef, {
		title: title,
		content: content,
	});
}

export async function deleteArticleById(id: string) {
	const dbRef = ref(db, '/news/' + id);
	await remove(dbRef);
}
