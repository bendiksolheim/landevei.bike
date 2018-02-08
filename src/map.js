import React from 'react';
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

class Map extends React.Component {
  componentDidMount() {
    const config = this.props.config;
    this.map = new mapboxgl.Map({
      center: config.center,
      container: this.container,
      style: config.style,
      zoom: config.zoom
    });

    this.map.on('load', () => {
      this._loaded = true;
      this.map.addSource(routeSourceId, emptySource);
      this.map.addLayer(routeLayer);
      if (this.props.route) {
        this.setRoute(this.props.route);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!this._loaded) {
      return;
    }

    if (this.props.route !== nextProps.route) {
      this.setRoute(nextProps.route);
    }
  }

  setRoute(route) {
    this.map.getSource(routeSourceId).setData(route);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      height: '100%',
      width: '100%'
    };
    return <div style={style} ref={el => (this.container = el)} />;
  }
}

export { Map };
