import { h } from 'hyperapp';
import './index.css';

const Route = (route, index) => <li key={index}>{route.name}</li>;

const Routes = ({ routes }) => <ul class="routes">{routes.map(Route)}</ul>;

export { Routes };
