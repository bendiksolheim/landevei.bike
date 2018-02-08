import React from 'react';
import { Map } from './map';
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
      route: null
    };
  }

  componentDidMount() {
    getRoutes()
      .then(response => getRoute(response.routes[0].link))
      .then(route => this.setState({ route: route }));
  }

  render() {
    return <Map config={this.state.map} route={this.state.route} />;
  }
}

export { App };
