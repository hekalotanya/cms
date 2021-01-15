const articlesUrl = 'https://hekalot-cms.herokuapp.com/articles';

export const getArticles = async() => {
  const articles = await fetch(articlesUrl);

  return articles.json();
};
