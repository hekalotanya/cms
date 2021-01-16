import React, { useState, useCallback } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import './NewArticle.scss';
import { postArticle } from '../../helpers/helpers';

export const NewArticle = () => {
  const [values, setValues] = useState({
    title: '',
    body: '',
  });
  const [message, setMessage] = useState({
    type: '',
    message: '',
  });

  const handleSubmit = useCallback(async() => {
    let article = null;
    const trimmedTitle = values.title.trim();
    const trimmedBody = values.body.trim();

    if (!trimmedTitle || !trimmedBody) {
      setMessage({
        type: 'error',
        message: 'All fields are required!',
      });
      setValues({
        title: trimmedTitle,
        body: trimmedBody,
      });

      return;
    }

    article = await postArticle(values);

    if (article?.posted) {
      setValues({
        title: '',
        body: '',
      });
      setMessage({
        type: 'posted',
        message: article.message,
      });
    } else {
      setMessage({
        type: 'error',
        message: article.message,
      });
    }
  }, [values]);

  const handleChange = useCallback(({ target: { name, value } }) => {
    setMessage({
      type: '',
      message: '',
    });
    setValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <div className="container">
      <Segment className="form-container">
        Create new article
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              name="title"
              value={values.title}
              id="title"
              placeholder="Article Title"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="body">Body</label>
            <textarea
              onChange={handleChange}
              name="body"
              value={values.body}
              id="body"
              placeholder="Article Body"
            />
          </Form.Field>
          {message
            && <div className={`${message.type}`}>{message.message}</div>
          }
          <Button type="submit">Create an Article</Button>
        </Form>
      </Segment>
    </div>
  );
};
