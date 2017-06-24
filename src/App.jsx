import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Index from './components/views/Index';
import ReviewShow from './components/views/ReviewShow';
import MovieShow from './components/views/MovieShow';
import NotFound from './components/ui/NotFound';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/movies/:id"
          render={({ match }) => (
            <MovieShow id={match.params.id} />
          )}
        />
        <Route path="/reviews/:id"
          render={({ match }) => (
            <ReviewShow id={match.params.id} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
