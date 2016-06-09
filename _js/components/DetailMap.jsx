import React from 'react';

const mapStyle = {
  border: 0,
  height: '200px',
  width: '100%'
};

const DetailMap = () => {
  return(
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1230.4745105155682!2d4.396623243941864!3d51.91664119708582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4356ae9de2941%3A0xbba1ceb104a3dd1a!2sHoogstraat+140%2C+3111+HM+Schiedam%2C+Netherlands!5e0!3m2!1sen!2sbe!4v1465497620566'
    style={mapStyle} frameBorder='0'></iframe>
  );
};

export default DetailMap;
