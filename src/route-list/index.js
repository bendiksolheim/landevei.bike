import React from 'react';
import './index.css';
import { getRoute } from '../repository';

const Route = (route, getRoute) => (
  <li key={route.name}>
    <button className="routes__route-button" onClick={() => getRoute(route)}>
      {route.name}
    </button>
  </li>
);

const Routes = ({ routes, getRoute }) => (
  <div className="routes">
    <h1 className="routes__title">Ruter</h1>
    <ul className="routes__list">
      {routes.map(route => Route(route, getRoute))}
    </ul>
  </div>
);

export { Routes };
