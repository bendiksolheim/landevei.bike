import React from 'react';
import './index.css';
import { getRoute } from '../repository';
import Range from 'rc-slider/lib/Range';

const RANGE_MIN = 0;
const RANGE_MAX = 100000;

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
    <h1 className="routes__title">Ruter</h1>
    <div className="routes__distance">
      <div className="routes__distance-values">
        <div className="routes__distance-min">{filter.distance.min}</div>
        <div className="routes__distance-max">{filter.distance.max}</div>
      </div>
      <Range
        min={RANGE_MIN}
        max={RANGE_MAX}
        defaultValue={[RANGE_MIN, RANGE_MAX]}
        onChange={onDistanceChange}
        allowCross={false}
      />
    </div>
    <ul className="routes__list">
      {routes
        .filter(r => between(r, filter.distance.min, filter.distance.max))
        .map(route => Route(route, getRoute))}
    </ul>
  </div>
);

export { Routes };
