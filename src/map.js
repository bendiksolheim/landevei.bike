import { h } from 'hyperapp';
import mapboxgl from 'mapbox-gl';

const routeLayerId = 'route_layer';
const routeSourceId = 'route_source';

const emptySource = {
  type: 'geojson',
  data: { type: 'FeatureCollection', features: [] }
};

const routeLayer = {
  id: 'route',
  type: 'line',
  source: routeSourceId,
  layout: {
    'line-join': 'round',
    'line-cap': 'round'
  },
  paint: {
    'line-color': '#7BB9E4',
    'line-width': 4
  }
};

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVuZGlrc29saGVpbSIsImEiOiJjamQzbHl6YXowdnZjMnFvcXJoMXNwcjRqIn0.Azuz2KugpSMCBwKSe0yc9Q';

function setRoute(map, route) {
  route.getSource(routeSourceId).setData(route.data);
}

function createMap(el, config) {
  const map = new mapboxgl.Map({
    center: config.center,
    container: el,
    style: config.style,
    zoom: config.zoom
  });

  map.on('load', () => {
    map.addControl(new mapboxgl.NavigationControl({ position: 'top-right' }));

    map.addSource(routeSourceId, emptySource);
    map.addLayer(routeLayer);
  });
}

const style = {
  height: '100%',
  width: '100%'
};

const Map = ({ config, route }) => (
  <div style={style} oncreate={el => createMap(el, config)} />
);

export { Map };
