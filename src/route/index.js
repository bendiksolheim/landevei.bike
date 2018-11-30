import { h } from 'hyperapp';
import classNames from 'classnames';
import './index.css';

const green = 120;
const red = 0;

const mToKm = m => (m / 1000).toFixed(2);

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const lengthIndicator = (routeLength, length) =>
  green - clamp(Math.abs(length - routeLength) / 20000, 0, 1) * green;

const onCreate = (el, route, length) => {
  el.style.setProperty(
    '--h',
    lengthIndicator(route.meta.distance, length * 1000)
  );
};

const onUpdate = (el, oldAttrs, route, length) => {
  console.log(
    route.meta.distance,
    Math.abs(length - route.meta.distance) / 1000
  );
  if (oldAttrs.length !== length) {
    el.style.setProperty(
      '--h',
      lengthIndicator(route.meta.distance, length * 1000)
    );
  }
};

const Route = ({ route, onclick, length, selected, elevation }) => (
  <button
    class={classNames('route', { 'route--selected': selected })}
    onclick={() => onclick(route)}
  >
    <div
      className="route__length-indicator"
      oncreate={el => onCreate(el, route, length)}
      onupdate={(el, oldAttrs) => onUpdate(el, oldAttrs, route, length)}
    />
    <div class="route__info">
      <div class="route__name">{route.name}</div>
      <div class="route__distance">
        <i class="material-icons route__icon">place</i>
        <span>{mToKm(route.meta.distance)} km</span>
      </div>
      <div class="route__elevation">
        <i class="material-icons route__icon">terrain</i>
        {route.meta.elevation} høydemeter
      </div>
    </div>
  </button>
);

export { Route };
