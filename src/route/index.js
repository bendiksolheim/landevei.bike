import { h } from 'hyperapp';
import classNames from 'classnames';
import './index.css';

const opaque = 1;
const transparent = 0.1;
const e = 2500;

const mToKm = m => (m / 1000).toFixed(2);

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const opacity = (routeLength, length) => {
  const diff = Math.abs(length - routeLength);
  return diff < e ? opaque : clamp(5000 / diff, transparent, opaque);
};

const onCreate = (el, routeLength, length) => {
  el.style.setProperty('--opacity', opacity(routeLength, length * 1000));
};

const onUpdate = (el, oldAttrs, routeLength, length) => {
  if (oldAttrs.length !== length) {
    el.style.setProperty('--opacity', opacity(routeLength, length * 1000));
  }
};

const Route = ({ route, onclick, length, selected, elevation }) => (
  <button
    class={classNames('route', { 'route--selected': selected })}
    onclick={() => onclick(route)}
    oncreate={el => onCreate(el, route.meta.distance, length)}
    onupdate={(el, oldAttrs) =>
      onUpdate(el, oldAttrs, route.meta.distance, length)
    }
  >
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
