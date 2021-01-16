import React, { useState, useEffect, useCallback } from 'react';
import { Dimmer, Loader, Segment, Card } from 'semantic-ui-react';
import { getArticles } from '../../helpers/helpers';
import './Articles.scss';

export const Articles = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async() => {
    setLoading(true);
    const data = await getArticles();

    setArticles(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div>
      {loading
        ? (
          <div className="container">
            <Dimmer active>
              <Loader content="Loading" />
            </Dimmer>
          </div>
        )
        : (
          <Segment>
            <Card.Group
              className="cards"
              centered
              itemsPerRow={3}
              items={articles.map(item => ({
                header: item.title,
                description: item.body,
                meta: `Post id: ${item.id}`,
              }))}
            />
          </Segment>
        )}
    </div>
  );
};
