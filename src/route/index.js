import { h } from 'hyperapp';
import classNames from 'classnames';
import './index.css';

const green = 120;
const red = 0;

const mToMiles = m => (m / 10000).toFixed(2);

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const lengthIndicator = (routeLength, length) =>
  green - clamp(Math.abs(length - routeLength) / length, 0, 1) * green;

const Route = ({ route, onclick, length, selected }) => (
  <button
    class={classNames('route', { 'route--selected': selected })}
    onclick={() => onclick(route)}
  >
    <div
      className={classNames('route__length-indicator', {
        'route__length-indicator--visible': length !== 0
      })}
      onupdate={(el, oldAttrs) => {
        if (oldAttrs.length !== length) {
          el.style.setProperty(
            '--h',
            lengthIndicator(route.meta.distance / 1000, length)
          );
        }
      }}
    />
    <div class="route__info">
      <div class="route__name">{route.name}</div>
      <div class="route__length">{mToMiles(route.meta.distance)} mil</div>
    </div>
  </button>
);

export { Route };
