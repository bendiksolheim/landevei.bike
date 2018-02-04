import mapboxgl from 'mapbox-gl';
import './app.css';

const dataBaseUrl = 'https://bendiksolheim.github.io/landevei.bike-data';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVuZGlrc29saGVpbSIsImEiOiJjamQzbHl6YXowdnZjMnFvcXJoMXNwcjRqIn0.Azuz2KugpSMCBwKSe0yc9Q';
const map = new mapboxgl.Map({
  center: [10.393149, 63.429834],
  container: 'app',
  style: 'mapbox://styles/bendiksolheim/cjd526ulr414d2ssc72yp9fku',
  zoom: 13
});

const byneset = {
  type: 'geojson',
  data: `${dataBaseUrl}/byneset.json`
};

map.on('load', () => {
  map.addSource('byneset', byneset);
  map.addLayer({
    id: 'route',
    type: 'line',
    source: 'byneset',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#000',
      'line-width': 4
    }
  });
});
