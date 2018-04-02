import { h } from 'hyperapp';
import './index.css';

const RouteInfo = ({ route }) =>
  route && <div className="route-info">{route.name}</div>;

export { RouteInfo };
