import React, {PropTypes} from 'react';
import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader';
import {GoogleMap, Marker} from 'react-google-maps';

const DetailMap = location => {
  const {lat, lng} = location;

  return (
    <ScriptjsLoader hostname={'maps.googleapis.com'} pathname={'/maps/api/js'}
      query={{
        v: 3.24,
        key: 'AIzaSyCJOQ7p5zAjGdDLFJqqbzTDUq-5gYreOS4',
        libraries: 'geometry,drawing,places'
      }}
      loadingElement={<div><i className='fa fa-spinner' aria-hidden='true' /></div>}
      containerElement={<article id='google-map-container' className='app-page-map' />}
      googleMapElement={
        <GoogleMap defaultZoom={3} defaultCenter={{lat, lng}}>
          <Marker position={{lat, lng}} />
        </GoogleMap>
      }
    />
  );
};


DetailMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default DetailMap;
