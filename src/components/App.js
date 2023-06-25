import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route path='/' exact>
            <ContentWrapper />
          </Route>
          <Route path='/LastMovieInDb' component={LastMovieInDb} />
          <Route path='/GenresInDb' component={GenresInDb} />
          <Route path='/Chart' component={Chart} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;