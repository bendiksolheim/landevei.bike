import React from 'react';
import { Map } from './map';
import { Routes } from './route-list';
import { getRoutes, getRoute } from './repository';
import { RouteInfo } from './route-info';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      map: {
        center: [10.393149, 63.429834],
        style: 'mapbox://styles/mapbox/dark-v9',
        zoom: 13
      },
      routes: [],
      route: null,
      filter: {
        distance: { min: 0, max: 100000 }
      }
    };
  }

  componentDidMount() {
    getRoutes().then(response => {
      this.setState({ routes: response.routes });
    });
  }

  onDistanceChange(minMax) {
    const filter = { ...this.state.filter };
    filter.distance.min = minMax[0];
    filter.distance.max = minMax[1];
    this.setState({ filter });
  }

  getRoute(route) {
    const savedRoute = this.state.routes.find(r => r.name === route.name);
    if (savedRoute.data) {
      this.setState({ route: savedRoute });
    } else {
      getRoute(route.link).then(response => {
        const routes = this.state.routes.map(r => {
          if (r.name === route.name) {
            r.data = response;
          }
          return r;
        });
        this.setState({ route: { ...route, data: response } });
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Map config={this.state.map} route={this.state.route} />;
        <Routes
          filter={this.state.filter}
          routes={this.state.routes}
          getRoute={this.getRoute.bind(this)}
          onDistanceChange={this.onDistanceChange.bind(this)}
        />
        <RouteInfo route={this.state.route} />
      </React.Fragment>
    );
  }
}

export { App };
