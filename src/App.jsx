import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import ReviewsPage from './components/containers/ReviewsPage';
import ReviewPage from './components/containers/ReviewPage';
import MoviePage from './components/containers/MoviePage';
import NotFound from './components/ui/NotFound';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={ReviewsPage} />
        <Route path="/movies/:id"
          render={({ match }) => (
            <MoviePage id={match.params.id} />
          )}
        />
        <Route path="/reviews/:id"
          render={({ match }) => (
            <ReviewPage id={match.params.id} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
