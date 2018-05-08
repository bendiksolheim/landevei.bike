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
  routes: [],
  route: null,
  lengthSlider: Slider.state({ min: 0, max: 200, value: 20, step: 2.5 }),
  length: 0
};

const actions = {
  search: length => state => ({ length: length, filter: false }),
  setRoutes: routes => state => ({ routes: routes }),
  getRoutes: () => (state, actions) =>
    getRoutes().then(res => actions.setRoutes(res.routes)),
  setRoute: route => state => ({ route }),
  getRoute: route => (state, actions) =>
    getRoute(route.link).then(res => actions.setRoute(res)),
  lengthSlider: Slider.actions
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
