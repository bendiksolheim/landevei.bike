import { h } from 'hyperapp';
import './index.css';

const Route = ({ route, onclick }) => (
  <button class="route" onclick={() => onclick(route)}>
    {route.name}
  </button>
);

export { Route };
