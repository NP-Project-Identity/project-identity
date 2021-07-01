import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import {GlobalHeader} from './components';
import {DashboardPage, EventManagePage, EventsListPage} from './pages';

export const App = () => (
  <>
    <GlobalHeader />
    <BrowserRouter>
        {/* <Route key={uuid()} path='/' render={props => (<GlobalHeader {...props} />)} /> */}
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/events' component={EventsListPage} />
        <Route exact path='/events/manage/:eventId' render={({match}) => (<EventManagePage eventId={match.params.eventId} />)} />
    </BrowserRouter>
  </>
);
