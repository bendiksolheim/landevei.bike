import { h } from 'hyperapp';
import { Route } from '/route';
import './index.css';

const RouteItem = getRoute => (route, index) => (
  <li class="routes__route" key={index}>
    <Route route={route} onclick={getRoute} />
  </li>
);

const Routes = ({ routes, activeRoute, getRoute }) => (
  <ul class="routes">{routes.map(RouteItem(getRoute))}</ul>
);

export { Routes };
