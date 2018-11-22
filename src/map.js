import { h } from 'hyperapp';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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
    'line-color': '#FE7035',
    'line-width': 4
  }
};

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVuZGlrc29saGVpbSIsImEiOiJjamQzbHl6YXowdnZjMnFvcXJoMXNwcjRqIn0.Azuz2KugpSMCBwKSe0yc9Q';

let map = null;

function setRoute(map, route) {
  const dataLayer = map.getSource(routeSourceId);
  dataLayer.setData(route);
  const coordinates = route.features[0].geometry.coordinates;
  const bounds = coordinates.reduce((bounds, coord) => {
    return bounds.extend(coord);
  }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
  map.fitBounds(bounds, { padding: 50 });
}

function createMap(el, config) {
  map = new mapboxgl.Map({
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

const Map = ({ config, data }) => (
  <div
    style={style}
    oncreate={el => createMap(el, config)}
    onupdate={(el, oldAttrs) => {
      if (data != oldAttrs.data) {
        setRoute(map, data);
      }
    }}
  />
);

export { Map };
