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
        style: 'mapbox://styles/bendiksolheim/cjd526ulr414d2ssc72yp9fku',
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

  render() {
    return (
      <React.Fragment>
        <Map config={this.state.map} route={this.state.route} />;
        <Routes
          routes={this.state.routes}
          setRoute={route => this.setState({ route: route })}
        />
      </React.Fragment>
    );
  }
}

export { App };
