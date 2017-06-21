import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import BlogPage from './components/containers/BlogPage';
import ReviewShow from './components/views/ReviewShow';
import MovieShow from './components/views/MovieShow';
import NotFound from './components/ui/NotFound';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={BlogPage} />
        <Route path="/movies/:id" component={MovieShow} />
        <Route path="/reviews/:id" component={ReviewShow} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
