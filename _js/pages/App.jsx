import React, {Component, PropTypes} from 'react';

export default class App extends Component {
  constructor(props, context){
    super(props, context);
  }

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    let {children} = this.props;

    return (
      <section className='app-container'>
        {children}
      </section>
    );
  }
}
