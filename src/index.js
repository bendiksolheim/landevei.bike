import { h, app } from 'hyperapp';
import { entry } from './app';
import api from './repository';
import { Slider } from 'hyperapp-slider';
import './app.css';

const state = {
  map: {
    center: [10.393149, 63.429834],
    style: 'mapbox://styles/bendiksolheim/cjosbdeu13l7k2roz0sm2c4bf',
    zoom: 13
  },
  filter: true,
  routes: [],
  route: null,
  data: null,
  lengthSlider: Slider.state({ min: 0, max: 200, value: 20, step: 2.5 }),
  length: 0
};

const search = length => state => ({ length, filter: false });
const setRoutes = routes => state => ({ routes });
const getRoutes = () => (state, actions) =>
  api.getRoutes().then(res => actions.setRoutes(res.routes));
const setRoute = ({ route, data }) => state => ({ route, data });
const getRoute = route => (state, actions) =>
  api.getRoute(route.link).then(data => actions.setRoute({ route, data }));

const actions = {
  search,
  setRoutes,
  getRoutes,
  setRoute,
  getRoute,
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
