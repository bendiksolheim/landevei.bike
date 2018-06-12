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

let map = null;

function setRoute(map, route) {
  map.getSource(routeSourceId).setData(route);
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
