import React from 'react';
import { Map } from './map';
import { Routes } from './route-list';
import { getRoutes, getRoute } from './repository';

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
      route: null
    };
  }

  componentDidMount() {
    getRoutes().then(response => {
      this.setState({ routes: response.routes });
    });
  }

  getRoute(route) {
    const savedRoute = this.state.routes.find(r => r.name === route.name);
    if (savedRoute.data) {
      console.log(`Route ${route.name} already downloaded`);
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
          routes={this.state.routes}
          getRoute={this.getRoute.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export { App };
