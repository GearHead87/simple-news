import toast from "react-hot-toast";

const newsStorageKey = 'newsArticles';

type ArticleProps = {
	id: number;
	title: string;
	content: string;
};

export function saveArticle(article: ArticleProps) {
	const articles = getAllArticles();
	const newArticle = { ...article };
	articles.push(newArticle);
	localStorage.setItem(newsStorageKey, JSON.stringify(articles));
	toast.success("Article is Saved")
	return newArticle;
}

export function getAllArticles() {
	const articles = localStorage.getItem(newsStorageKey);
	return articles ? JSON.parse(articles) : [];
}

export function getArticleById(id: number) {
	const articles = getAllArticles();
	return articles.find((article: ArticleProps) => article.id === id);
}

export function deleteArticleById(id: number) {
	let articles = getAllArticles();
	articles = articles.filter((article: ArticleProps) => article.id !== id);
	localStorage.setItem(newsStorageKey, JSON.stringify(articles));
	toast.success("Article is Deleted")
}
