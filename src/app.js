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
      {state.filter && (
        <Filter
          state={state}
          actions={actions}
          filter={state.filter}
          search={actions.search}
        />
      )}
      <Routes routes={state.routes} />
      <Map config={state.map} route={state.route} />
      <RouteInfo route={state.route} />
    </div>
  </div>
);

// class App extends React.Component {
// constructor() {
//   super();

//   this.state = {
//     map: {
//       center: [10.393149, 63.429834],
//       style: 'mapbox://styles/mapbox/light-v9',
//       zoom: 13
//     },
//     filter: true,
//     length: null,
//     routes: [],
//     route: null,
//     filter: {
//       speed: 6.94,
//       time: 3600
//     }
//   };
// }

// componentDidMount() {
//   getRoutes().then(response => {
//     this.setState({ routes: response.routes });
//   });
// }

// onChangeSpeed(speed) {
//   const filter = { ...this.state.filter };
//   filter.speed = speed;
//   this.setState({ filter });
// }

// onChangeTime(time) {
//   const filter = { ...this.state.filter };
//   filter.time = time;
//   this.setState({ filter });
// }

// getRoute(route) {
//   const savedRoute = this.state.routes.find(r => r.name === route.name);
//   if (savedRoute.data) {
//     this.setState({ route: savedRoute });
//   } else {
//     getRoute(route.link).then(response => {
//       const routes = this.state.routes.map(r => {
//         if (r.name === route.name) {
//           r.data = response;
//         }
//         return r;
//       });
//       this.setState({ route: { ...route, data: response } });
//     });
//   }
// }

// search() {
//   const length = this.state.speed * this.state.time;
//   this.setState({ filter: false, length: length });
// }

//   render() {
//     return (
//     );
//   }
// }

export { entry };
