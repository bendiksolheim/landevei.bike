import { h, app } from 'hyperapp';
import { entry } from './app';
import { getRoutes, getRoute } from './repository';
import { Slider } from 'hyperapp-slider';
import './app.css';

const state = {
  map: {
    center: [10.393149, 63.429834],
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 13
  },
  filter: true,
  length: null,
  routes: [],
  route: null,
  speed: Slider.state({ min: 0, max: 50, value: 20, step: 1 }),
  time: Slider.state({ min: 0, max: 900, value: 120, step: 15 })
};

const actions = {
  search: state => ({ length: state.filter.speed * state.filter.time }),
  setRoutes: routes => state => ({ routes: routes }),
  getRoutes: () => (state, actions) =>
    getRoutes().then(res => actions.setRoutes(res.routes)),
  speed: Slider.actions,
  time: Slider.actions
};

function init() {
  if (process.env.NODE_ENV !== 'production') {
    return import('hyperapp-redux-devtools').then(devtools => {
      return devtools(app);
    });
  } else {
    return Promise.resolve(app);
  }
}

init().then(app => {
  const container = document.querySelector('#app');
  const main = app(state, actions, entry, container);

  main.getRoutes();
});
