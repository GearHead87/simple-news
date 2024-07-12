import { getDatabase, ref, set } from 'firebase/database';
import { db } from '../config';

type ArticleProps = {
	// id: number;
	title: string;
	content: string;
};

export function saveArticle(title: string, content: string) {
	set(ref(db, 'news/'), {
		title: title,
		content: content,
	});
}
