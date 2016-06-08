import React, {PropTypes} from 'react';
import {default as ScriptjsLoader} from 'react-google-maps/lib/async/ScriptjsLoader';
import {GoogleMap, Marker} from 'react-google-maps';

const DetailMap = location => {
  const {lat, lng} = location;
  const version = Math.ceil(Math.random() * 22);

  return (
    <article className='app-page-map'>
    <ScriptjsLoader hostname='maps.googleapis.com' pathname={"/maps/api/js"}
    query={{v: `3.${version}`, libraries: 'geometry,drawing,places'}}
    loadingElement={<div className='spinner'>
      <div className='rect1'></div>
      <div className='rect2'></div>
      <div className='rect3'></div>
      <div className='rect4'></div>
      <div className='rect5'></div>
    </div>} containerElement={<div />}
    googleMapElement={
      <GoogleMap defaultZoom={3} defaultCenter={{lat, lng}}>
        <Marker />
      </GoogleMap>
    }
    />
    </article>
  );
};

DetailMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default DetailMap;
