import React from 'react';
import './index.css';

const RouteInfo = ({ route }) =>
  route && <div className="route-info">{route.name}</div>;

export { RouteInfo };
