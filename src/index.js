import mapboxgl from 'mapbox-gl';
import './app.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYmVuZGlrc29saGVpbSIsImEiOiJjamQzbHl6YXowdnZjMnFvcXJoMXNwcjRqIn0.Azuz2KugpSMCBwKSe0yc9Q';
const map = new mapboxgl.Map({
  center: [10.393149, 63.429834],
  container: 'app',
  style: 'mapbox://styles/bendiksolheim/cjd526ulr414d2ssc72yp9fku',
  zoom: 13
});
