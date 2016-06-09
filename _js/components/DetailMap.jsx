import React, {PropTypes} from 'react';

const mapStyle = {
  border: 0,
  height: '200px',
  width: '100%'
};

const DetailMap = location => {
  const {lat, lng} = location;
  return(
    <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d615.2507140017236!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU0JzU2LjQiTiA0wrAyMyc1Mi43IkU!5e0!3m2!1sen!2sbe!4v1465332408646`}
    style={mapStyle} frameBorder='0'></iframe>
  );
};

DetailMap.propTypes = {
  location: PropTypes.array.isRequired
};

export default DetailMap;
