import { h } from 'hyperapp';
import { Route } from '/route';
import './index.css';

const RouteItem = (getRoute, length, activeRoute) => (route, index) => (
  <li class="routes__route" key={index}>
    <Route
      route={route}
      onclick={getRoute}
      length={length}
      selected={activeRoute === route}
    />
  </li>
);

const Routes = ({ routes, activeRoute, getRoute, length }) => (
  <ul class="routes">{routes.map(RouteItem(getRoute, length, activeRoute))}</ul>
);

export { Routes };
