import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div >{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.751030,
      lng: 2.507140
    },
    zoom: 13
    
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vw', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBwk_e4TvvWIH11PYLlOce9am6_EYnhycI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          <AnyReactComponent
            lat={48.751030}
            lng={2.507140}
            text="text"
          />
        
        </GoogleMapReact>
        
      </div>
    );
  }
}



export default SimpleMap;