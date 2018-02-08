import React from 'react';
import './index.css';
import { getRoute } from '../repository';

const Route = ({ link, name }, setRoute) => (
  <li key={name}>
    <button
      className="routes__route-button"
      onClick={() => getRoute(link).then(route => setRoute(route))}
    >
      {name}
    </button>
  </li>
);

const Routes = ({ routes, setRoute }) => (
  <div className="routes">
    <h1 className="routes__title">Routes</h1>
    <ul>{routes.map(route => Route(route, setRoute))}</ul>
  </div>
);

export { Routes };
