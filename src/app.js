import { h } from 'hyperapp';
import { Map } from './map';
import { getRoutes, getRoute } from './repository';
import { RouteInfo } from './route-info';
import { Filter } from './filter';
import { Routes } from './routes';
import logo from './assets/logo.svg';

const entry = (state, actions) => (
  <div class="app">
    <div class="app__filter">
      <div class="app__header">
        <img src={logo} class="app__logo" />
        <h1 class="app__title">landevei.bike</h1>
      </div>
      {state.filter && (
        <Filter
          state={state}
          actions={actions}
          filter={state.filter}
          search={actions.search}
        />
      )}
      <Routes
        routes={state.routes}
        route={state.route}
        getRoute={actions.getRoute}
        length={state.length}
      />
    </div>
    <div class="app__map">
      <Map config={state.map} data={state.data} />
      <RouteInfo route={state.route} />
    </div>
  </div>
);

export { entry };
