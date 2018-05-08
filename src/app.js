import { h } from 'hyperapp';
import { Map } from './map';
import { getRoutes, getRoute } from './repository';
import { RouteInfo } from './route-info';
import { Filter } from './filter';
import { Routes } from './routes';
import logo from './assets/logo.svg';

const entry = (state, actions) => (
  <div class="app">
    <div class="app__header">
      <img src={logo} class="app__logo" />
      <h1 class="app__title">landevei.bike</h1>
    </div>
    <div class="app__content">
      <div class="app__filter">
        {state.filter && (
          <Filter
            state={state}
            actions={actions}
            filter={state.filter}
            search={actions.search}
          />
        )}
      </div>
      <div class="app__map">
        <Routes
          routes={state.routes}
          activeRoute={state.route}
          getRoute={actions.getRoute}
        />
        <Map config={state.map} route={state.route} />
        <RouteInfo route={state.route} />
      </div>
    </div>
  </div>
);

export { entry };
