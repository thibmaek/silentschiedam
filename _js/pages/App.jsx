import React, {PropTypes} from 'react';

const App = props => {
  let {children} = props;

  return (
    <section className='app-container'>
      {children}
    </section>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
