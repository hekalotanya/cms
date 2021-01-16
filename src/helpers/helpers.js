const articlesUrl = 'https://hekalot-cms.herokuapp.com/articles';

export const getArticles = async() => {
  const articles = await fetch(articlesUrl);

  return articles.json();
};

export const postArticle = async(data) => {
  const result = {
    posted: false,
    message: '',
  };

  try {
    const response = await fetch(articlesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      result.posted = true;
      result.message = 'Article added, check /articles page';
    }
  } catch (e) {
    result.message = e;
  }

  return result;
};
