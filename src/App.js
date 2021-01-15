import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import { Articles } from './components/Article';
import { NewArticle } from './components/NewArticle';
import { Home } from './components/Home';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

export const App = () => (
  <Router>
    <div>
      <nav>
        <ul className="navigation">
          <li className="navigation__item">
            <NavLink
              activeClassName="navigation__item--active"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="navigation__item--active"
              to="/articles"
            >
              Articles
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              activeClassName="navigation__item--active"
              to="/new-article"
            >
              New Article
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/new-article">
          <NewArticle />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
