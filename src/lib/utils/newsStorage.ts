const newsStorageKey = 'newsArticles';

export function saveArticle(article) {
  const articles = getAllArticles();
  const newArticle = { ...article, id: Date.now().toString() };
  articles.push(newArticle);
  localStorage.setItem(newsStorageKey, JSON.stringify(articles));
  return newArticle;
}

export function getAllArticles() {
  const articles = localStorage.getItem(newsStorageKey);
  return articles ? JSON.parse(articles) : [];
}

export function getArticleById(id) {
  const articles = getAllArticles();
  return articles.find(article => article.id === id);
}

export function deleteArticleById(id) {
  let articles = getAllArticles();
  articles = articles.filter(article => article.id !== id);
  localStorage.setItem(newsStorageKey, JSON.stringify(articles));
}


