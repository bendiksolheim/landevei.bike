import { h } from 'hyperapp';
import './index.css';
import { getRoute } from '../repository';

function between(route, min, max) {
  return route.meta.distance >= min && route.meta.distance <= max;
}

const Route = (route, getRoute) => (
  <li key={route.name}>
    <button className="routes__route-button" onClick={() => getRoute(route)}>
      {route.name}
    </button>
  </li>
);

const Routes = ({ filter, routes, getRoute, onDistanceChange }) => (
  <div className="routes">
    <h1 className="routes__title">Treff</h1>
    <ul className="routes__list">
      {routes
        .filter(r => between(r, filter.distance.min, filter.distance.max))
        .map(route => Route(route, getRoute))}
    </ul>
  </div>
);

export { Routes };
